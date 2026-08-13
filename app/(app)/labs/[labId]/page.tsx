import { prisma } from '@/lib/prisma';
import {
  ShieldCheck,
  Clock,
  KeyRound,
  Coins,
  TimerReset,
  Terminal,
  Globe,
  Wifi,
  Lock,
  Database,
  Shield,
  ChevronRight,
  Target,
  Zap,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';
import StartLabButton from './StartLabButton';

type Props = { params: Promise<{ labId: string }> };

const DIFFICULTY_STYLE: Record<string, { bg: string; color: string; label: string; barColor: string }> = {
  EASY: { bg: 'rgba(34, 199, 169, 0.14)', color: 'var(--accent-teal)', label: 'Easy', barColor: '#22c7a9' },
  MEDIUM: { bg: 'rgba(240, 163, 58, 0.16)', color: 'var(--accent-amber)', label: 'Medium', barColor: '#f0a33a' },
  HARD: { bg: 'rgba(255, 87, 87, 0.16)', color: 'var(--accent-red)', label: 'Hard', barColor: '#ff5757' },
};

const DIFFICULTY_BARS: Record<string, number> = { EASY: 1, MEDIUM: 2, HARD: 3 };

const CATEGORY_LABELS: Record<string, string> = {
  WEB_ATTACKS: 'Web Attacks',
  NETWORK_ATTACKS: 'Network Attacks',
  APPLICATION_ATTACKS: 'Application Attacks',
  PRIVILEGE_ESCALATION: 'Privilege Escalation',
  GHANA_FOCUS: 'Ghana Focus',
  OTHER: 'Other',
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  WEB_ATTACKS: <Globe size={18} />,
  NETWORK_ATTACKS: <Wifi size={18} />,
  APPLICATION_ATTACKS: <Terminal size={18} />,
  PRIVILEGE_ESCALATION: <Lock size={18} />,
  GHANA_FOCUS: <Shield size={18} />,
  OTHER: <Database size={18} />,
};

const ACCESS_DESCRIPTIONS: Record<string, string> = {
  WEB_TERMINAL: 'Interact via embedded browser terminal',
  SSH: 'Connect via SSH in your terminal',
  HTTP: 'Access through embedded web browser',
  GUI: 'Full graphical user interface',
};

export default async function LabPage({ params }: Props) {
  const { labId } = await params;
  const lab = await prisma.lab.findFirst({
    where: {
      OR: [{ slug: labId }, { id: labId }],
    },
  });

  if (!lab) {
    return (
      <section className="mx-auto max-w-5xl">
        <div className="panel flex flex-col items-center justify-center gap-4 p-16 text-center">
          <AlertTriangle size={40} className="text-[var(--accent-amber)] opacity-70" />
          <div>
            <p className="text-lg font-semibold">Lab not found</p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              This lab may have been removed or the link is invalid.
            </p>
          </div>
          <Link href="/labs" className="cyber-button-secondary mt-2 inline-flex items-center gap-2">
            <ChevronRight size={14} className="rotate-180" />
            Back to Labs
          </Link>
        </div>
      </section>
    );
  }

  const diff = DIFFICULTY_STYLE[lab.difficulty];
  const diffBars = DIFFICULTY_BARS[lab.difficulty] ?? 1;

  return (
    <section className="mx-auto max-w-6xl space-y-6 animate-fade-in-up">
      {/* ── Breadcrumb ─────────────────────────────── */}
      <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <Link href="/labs" className="hover:text-[var(--text-secondary)] transition-colors">
          Labs
        </Link>
        <ChevronRight size={12} />
        <span className="text-[var(--text-secondary)]">{lab.title}</span>
      </nav>

      {/* ── Hero Header ────────────────────────────── */}
      <div className="panel relative overflow-hidden p-6 sm:p-8">
        {/* Background accent */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(109,93,252,0.1),transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--accent-violet)] opacity-5 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            {/* Category badge */}
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[rgba(47,134,255,0.1)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-blue)]">
                {CATEGORY_ICONS[lab.category] && (
                  <span className="opacity-80">{CATEGORY_ICONS[lab.category]}</span>
                )}
                {CATEGORY_LABELS[lab.category] ?? lab.category}
              </span>
              <span
                className="status-pill"
                style={{ background: diff?.bg, color: diff?.color }}
              >
                {diff?.label ?? lab.difficulty}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{lab.title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
              {lab.description}
            </p>

            {/* Skills */}
            {lab.skills?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {lab.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-[rgba(109,93,252,0.1)] px-2.5 py-1 text-[11px] font-semibold text-[var(--accent-violet)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
            <StartLabButton labId={lab.slug} />
            <p className="text-[11px] text-[var(--text-muted)]">
              Docker container · isolated network · auto-destroy
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content Grid ───────────────────────── */}
      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        {/* Left: Stats + Objective */}
        <div className="space-y-5">
          {/* Quick-stats strip */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                icon: <Clock size={18} />,
                label: 'Time Estimate',
                value: `${lab.timeEstimate} min`,
                color: 'rgba(47,134,255,0.12)',
                iconColor: 'var(--accent-blue)',
              },
              {
                icon: <KeyRound size={18} />,
                label: 'Access Type',
                value: lab.accessType,
                color: 'rgba(109,93,252,0.12)',
                iconColor: 'var(--accent-violet)',
              },
              {
                icon: <TimerReset size={18} />,
                label: 'Instance TTL',
                value: `${lab.maxDurationMin} min`,
                color: 'rgba(240,163,58,0.12)',
                iconColor: 'var(--accent-amber)',
              },
              {
                icon: <Coins size={18} />,
                label: 'Reward',
                value: `${lab.points} pts`,
                color: 'rgba(34,199,169,0.12)',
                iconColor: 'var(--accent-teal)',
              },
            ].map(({ icon, label, value, color, iconColor }) => (
              <div
                key={label}
                className="panel-soft flex flex-col gap-3 p-4 transition-transform hover:-translate-y-0.5"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: color, color: iconColor }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-[var(--text-primary)]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Objective card */}
          <div className="panel overflow-hidden p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(109,93,252,0.14)] text-[var(--accent-violet)]">
                <Target size={16} />
              </div>
              <p className="font-semibold">Mission Objective</p>
            </div>

            {/* Terminal-style block */}
            <div className="rounded-xl border border-[rgba(47,134,255,0.2)] bg-[rgba(5,9,20,0.7)] p-4 font-mono text-sm">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[10px] text-[var(--text-muted)]">objective.txt</span>
              </div>
              <div className="space-y-1.5 text-xs leading-6">
                <p>
                  <span className="text-[var(--accent-teal)]">$</span>{' '}
                  <span className="text-[var(--text-secondary)]">cat mission.txt</span>
                </p>
                <p className="text-[var(--text-primary)]">
                  1. Launch the isolated Docker target environment.
                </p>
                <p className="text-[var(--text-primary)]">
                  2. Identify and exploit the command injection vulnerability.
                </p>
                <p className="text-[var(--text-primary)]">
                  3. Navigate the filesystem to locate the hidden flag file.
                </p>
                <p className="text-[var(--text-primary)]">
                  4. Retrieve and submit the flag before the instance expires.
                </p>
                <p>
                  <span className="text-[var(--accent-violet)]">$</span>{' '}
                  <span className="animate-pulse text-[var(--text-muted)]">_</span>
                </p>
              </div>
            </div>
          </div>

          {/* Access type explanation */}
          <div className="panel p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(47,134,255,0.12)] text-[var(--accent-blue)]">
                <BookOpen size={16} />
              </div>
              <p className="font-semibold">How to Access</p>
            </div>
            <div className="rounded-xl bg-[rgba(47,134,255,0.06)] p-4">
              <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                {CATEGORY_ICONS[lab.category] ?? <Globe size={16} />}
                <p className="text-sm font-semibold">
                  {ACCESS_DESCRIPTIONS[lab.accessType] ?? lab.accessType}
                </p>
              </div>
              <p className="mt-3 text-xs leading-5 text-[var(--text-secondary)]">
                Once the lab is started, an isolated container is provisioned with a unique access URL.
                You can use the embedded frame or open it in a new tab for tools like{' '}
                <code className="rounded bg-[rgba(255,255,255,0.06)] px-1 py-0.5 font-mono text-[var(--accent-violet)]">
                  curl
                </code>
                ,{' '}
                <code className="rounded bg-[rgba(255,255,255,0.06)] px-1 py-0.5 font-mono text-[var(--accent-violet)]">
                  Burp Suite
                </code>{' '}
                or{' '}
                <code className="rounded bg-[rgba(255,255,255,0.06)] px-1 py-0.5 font-mono text-[var(--accent-violet)]">
                  sqlmap
                </code>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right: Sidebar info */}
        <aside className="space-y-5">
          {/* Difficulty visualizer */}
          <div className="panel p-5">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
              <Zap size={12} />
              Difficulty
            </p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3].map((bar) => (
                  <div
                    key={bar}
                    className="h-8 w-4 rounded-sm transition-all"
                    style={{
                      background: bar <= diffBars ? diff?.barColor : 'rgba(255,255,255,0.06)',
                      boxShadow: bar <= diffBars ? `0 0 8px ${diff?.barColor}60` : 'none',
                    }}
                  />
                ))}
              </div>
              <div>
                <p className="font-bold" style={{ color: diff?.color }}>
                  {diff?.label}
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  {lab.difficulty === 'EASY'
                    ? 'Great for beginners'
                    : lab.difficulty === 'MEDIUM'
                    ? 'Intermediate challenge'
                    : 'Expert level'}
                </p>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="panel p-5">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
              <Shield size={12} />
              Category
            </p>
            <div className="rounded-xl bg-[rgba(109,93,252,0.08)] p-4">
              <div className="flex items-center gap-2.5 text-[var(--accent-violet)]">
                {CATEGORY_ICONS[lab.category] ?? <Database size={18} />}
                <p className="font-semibold">{CATEGORY_LABELS[lab.category] ?? lab.category}</p>
              </div>
              <p className="mt-3 text-xs leading-5 text-[var(--text-secondary)]">
                Every start request creates a fresh Docker container on an isolated network with
                automatic expiry after {lab.maxDurationMin} minutes.
              </p>
            </div>
          </div>

          {/* Reward */}
          <div className="panel p-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
              <ShieldCheck size={12} />
              Reward
            </p>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(34,199,169,0.12)] text-[var(--accent-teal)]">
                <Coins size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--accent-teal)]">{lab.points}</p>
                <p className="text-xs text-[var(--text-muted)]">points on flag capture</p>
              </div>
            </div>
          </div>

          {/* Start CTA */}
          <div className="panel relative overflow-hidden p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(109,93,252,0.14),transparent_60%)]" />
            <p className="relative mb-2 font-semibold">Ready to start?</p>
            <p className="relative mb-4 text-xs leading-5 text-[var(--text-secondary)]">
              A fresh container will be provisioned in seconds. You&apos;ll have {lab.maxDurationMin}{' '}
              minutes once launched.
            </p>
            <StartLabButton labId={lab.slug} />
          </div>
        </aside>
      </div>
    </section>
  );
}
