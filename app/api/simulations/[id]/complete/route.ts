import { NextResponse } from 'next/server';
import type { Prisma } from '@/lib/generated/prisma/client';
import { prisma } from '@/lib/prisma';

type SimulationForReport = Prisma.SimulationGetPayload<{
  include: {
    scenario: true;
    report: true;
    steps: true;
  };
}>;

type ReportContent = {
  summary: string;
  strengths: string[];
  areasToImprove: string[];
  recommendations: string[];
};

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Get the simulation with all steps and scenario
    const simulation = await prisma.simulation.findUnique({
      where: { id },
      include: {
        scenario: true,
        report: true,
        steps: {
          orderBy: { stepNumber: 'asc' },
        },
      },
    });

    if (!simulation) {
      return NextResponse.json(
        { error: 'Simulation not found' },
        { status: 404 }
      );
    }

    if (simulation.status === 'COMPLETED' && simulation.report) {
      return NextResponse.json({
        simulation,
        report: simulation.report,
      });
    }

    // Calculate final metrics
    const totalSteps = simulation.steps.length;
    const correctActions = simulation.steps.filter((step) => step.isCorrect).length;
    const score = totalSteps > 0 ? Math.round((correctActions / totalSteps) * 1000) : 0;
    const riskReduced = simulation.riskReduced;

    // Generate report content (AI-powered with Anthropic fallback to heuristic)
    const reportContent = await generateReportWithAI(simulation, correctActions, totalSteps, riskReduced);

    const completedAt = new Date();

    const { report, updatedSimulation } = await prisma.$transaction(async (tx) => {
      const statusUpdate = await tx.simulation.updateMany({
        where: {
          id,
          status: { not: 'COMPLETED' },
        },
        data: {
          status: 'COMPLETED',
          score,
          completedAt,
        },
      });

      const report = await tx.report.upsert({
        where: { simulationId: id },
        create: {
          simulationId: id,
          userId: simulation.userId,
          score,
          timeTakenSec: simulation.timeTakenSec,
          correctActions,
          totalActions: totalSteps,
          riskReduced,
          summary: reportContent.summary,
          strengths: reportContent.strengths,
          areasToImprove: reportContent.areasToImprove,
          recommendations: reportContent.recommendations,
          completedAt,
        },
        update: {
          userId: simulation.userId,
          score,
          timeTakenSec: simulation.timeTakenSec,
          correctActions,
          totalActions: totalSteps,
          riskReduced,
          summary: reportContent.summary,
          strengths: reportContent.strengths,
          areasToImprove: reportContent.areasToImprove,
          recommendations: reportContent.recommendations,
          completedAt,
        },
      });

      if (statusUpdate.count > 0) {
        await tx.user.update({
          where: { id: simulation.userId },
          data: {
            totalScore: {
              increment: score,
            },
          },
        });
      }

      const updatedSimulation = await tx.simulation.findUnique({
        where: { id },
        include: {
          scenario: true,
        },
      });

      if (!updatedSimulation) {
        throw new Error('Simulation not found after completion');
      }

      return { report, updatedSimulation };
    });

    return NextResponse.json({
      simulation: updatedSimulation,
      report,
    });
  } catch (error) {
    console.error('Error completing simulation:', error);
    return NextResponse.json(
      { error: 'Failed to complete simulation' },
      { status: 500 }
    );
  }
}

async function generateReportWithAI(
  simulation: SimulationForReport,
  correctActions: number,
  totalActions: number,
  riskReduced: number
): Promise<ReportContent> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (apiKey) {
    try {
      const scenario = simulation.scenario;
      const stepsSummary = simulation.steps
        .map(
          (s, idx) =>
            `Step ${idx + 1}: ${s.title} — Choice: "${s.options[s.selectedOption ?? 0]}" (${s.isCorrect ? 'Correct' : 'Incorrect'})`
        )
        .join('\n');

      const prompt = `You are a Senior Cybersecurity Incident Response Assessor evaluating a learner's performance in a simulated cyber crisis.

Scenario: "${scenario.title}"
Category: ${scenario.category}
Difficulty: ${scenario.difficulty}
Score: ${correctActions}/${totalActions} correct actions
Risk Reduced: ${riskReduced}%

Learner Timeline:
${stepsSummary}

Provide a structured debriefing JSON object with EXACTLY the following keys:
{
  "summary": "2-3 sentences summarizing performance, threat response quality, and tactical posture",
  "strengths": ["3 specific bullet points of tactical decisions done well"],
  "areasToImprove": ["3 specific areas needing tighter security judgment"],
  "recommendations": ["3 actionable defensive recommendations for future incidents"]
}

Respond ONLY with valid JSON, no markdown codeblocks or preamble.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 800,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.content?.[0]?.text?.trim();
        if (text) {
          const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
          if (parsed.summary && Array.isArray(parsed.strengths)) {
            return parsed;
          }
        }
      }
    } catch (aiErr) {
      console.warn('Anthropic AI report generation failed, using fallback:', aiErr);
    }
  }

  // Fallback heuristic report generator
  return generateHeuristicReport(simulation, correctActions, totalActions);
}

function generateHeuristicReport(
  simulation: SimulationForReport,
  correctActions: number,
  totalActions: number
): ReportContent {
  const scenario = simulation.scenario;
  const performance = totalActions > 0 ? correctActions / totalActions : 0;

  if (performance >= 0.8) {
    return {
      summary: `Excellent performance on the ${scenario.title} scenario. You demonstrated strong understanding of ${scenario.category.toLowerCase().replace('_', ' ')} defense strategies and made sound decisions throughout the attack lifecycle.`,
      strengths: [
        'Strong situational awareness under pressure',
        'Quick threat identification and containment',
        'Appropriate defensive tool selection',
      ],
      areasToImprove: [
        'Consider advanced threat hunting techniques',
        'Explore automated SOC playbook integrations',
      ],
      recommendations: [
        'Attempt harder scenarios to test your response under higher complexity.',
        'Review forensic logs to identify secondary attack vectors.',
        'Document incident response timelines for team post-mortems.',
      ],
    };
  } else if (performance >= 0.6) {
    return {
      summary: `Solid performance on the ${scenario.title} scenario. You identified primary threat vectors and mitigated major risks, though decision timing and containment precision can be tightened.`,
      strengths: [
        'Adequate initial threat recognition',
        'Reasonable defensive choices during escalation',
        'Good risk reduction execution',
      ],
      areasToImprove: [
        'Improve containment response speed',
        'Enhance indicator-of-compromise pattern matching',
      ],
      recommendations: [
        'Review missed decision branches in the scenario debrief.',
        'Re-run this scenario to achieve 100% containment score.',
        'Study attack framework TTPs relevant to this category.',
      ],
    };
  } else {
    return {
      summary: `Your performance on the ${scenario.title} scenario highlights important learning opportunities in ${scenario.category.toLowerCase().replace('_', ' ')} defense fundamentals.`,
      strengths: [
        'Completed full scenario simulation run',
        'Engaged with threat scenario indicators',
      ],
      areasToImprove: [
        'Threat identification and indicator recognition',
        'Containment action ordering and priority',
        'Risk assessment precision',
      ],
      recommendations: [
        'Review the corresponding module in the Learn Hub before re-trying.',
        'Focus on early indicators of compromise (IoCs).',
        'Practice foundational scenarios to build muscle memory.',
      ],
    };
  }
}
