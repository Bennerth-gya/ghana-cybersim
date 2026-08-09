import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Scenario } from '@/lib/generated/prisma/client';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const scenario = await prisma.scenario.findUnique({
      where: { id },
    });

    if (!scenario) {
      return NextResponse.json(
        { error: 'Scenario not found' },
        { status: 404 }
      );
    }

    // Generate simulation steps based on scenario
    const steps = generateSimulationSteps(scenario);

    return NextResponse.json({ scenario, steps });
  } catch (error) {
    console.error('Error fetching scenario:', error);
    return NextResponse.json(
      { error: 'Failed to fetch scenario' },
      { status: 500 }
    );
  }
}

function generateSimulationSteps(scenario: Scenario) {
  // This is a simplified version - in production, you'd have step templates
  // or AI-generated steps based on the scenario type
  const baseSteps = [
    {
      stepNumber: 1,
      title: 'Reconnaissance',
      description: 'Attacker gathers information about the target.',
      narrative: `The attacker researches the target organization to understand their systems and potential vulnerabilities related to ${scenario.risk}.`,
      attackerGoal: 'Build a believable profile of the victim and organization.',
      options: [
        'Open every staff directory to compare names',
        'Report the suspicious research pattern',
        'Ignore the activity because it is public information',
        'Send the attacker a warning message',
      ],
      correctOption: 1,
    },
    {
      stepNumber: 2,
      title: 'Weaponization',
      description: 'Malicious tools are prepared.',
      narrative: `A ${scenario.category.toLowerCase()} attack vector is being prepared to exploit the identified vulnerabilities.`,
      attackerGoal: 'Create a convincing attack mechanism that appears legitimate.',
      options: [
        'Approve the mechanism because it looks polished',
        'Check the source, certificate, and ownership details',
        'Enter a test input to confirm it works',
        'Forward the mechanism to other teams for visibility',
      ],
      correctOption: 1,
    },
    {
      stepNumber: 3,
      title: 'Delivery',
      description: 'The attack reaches the target.',
      narrative: `The ${scenario.category.toLowerCase()} attack is delivered to the target system or user.`,
      attackerGoal: 'Convince the target to interact with the malicious element.',
      options: [
        'Click the link before the deadline',
        'Report the activity as suspicious',
        'Reply and ask the sender for proof',
        'Delete the message without logging it',
      ],
      correctOption: 1,
    },
    {
      stepNumber: 4,
      title: 'Exploitation',
      description: 'The attack executes.',
      narrative: `The ${scenario.risk} exploit begins as the target interacts with the malicious element.`,
      attackerGoal: 'Execute the attack payload before detection.',
      options: [
        'Reset credentials and notify security',
        'Wait to see if the attacker tries again',
        'Ask the user to keep using the system',
        'Archive the alert until business hours',
      ],
      correctOption: 0,
    },
    {
      stepNumber: 5,
      title: 'Actions on Objectives',
      description: 'Attacker pursues their goals.',
      narrative: `The attacker attempts to achieve their primary objective related to ${scenario.risk}.`,
      attackerGoal: 'Reach sensitive systems or achieve the attack goal.',
      options: [
        'Enable multi-factor authentication only',
        'Review activity logs only',
        'Report unauthorized access only',
        'Contain the threat, review logs, and preserve evidence',
      ],
      correctOption: 3,
    },
  ];

  return baseSteps;
}
