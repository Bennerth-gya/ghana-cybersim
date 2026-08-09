import type { CSSProperties } from "react";
import { Medal, TrendingUp, Trophy, Users } from "lucide-react";

interface LeaderboardUser {
  id: string;
  name: string;
  role: string;
  score: number;
  accuracy: string;
  trend: string;
  rank: number;
}

export default async function LeaderboardPage() {
  // Use relative URL — works in all environments (dev, prod, Vercel)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  let leaderboardUsers: LeaderboardUser[] = [];
  let total = 0;

  try {
    const response = await fetch(`${baseUrl}/api/leaderboard`, { cache: 'no-store' });
    if (response.ok) {
      const data = await response.json();
      leaderboardUsers = data.users ?? [];
      total = data.total ?? 0;
    }
  } catch (err) {
    console.error('Failed to fetch leaderboard:', err);
  }

  const topThree = leaderboardUsers.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl space-y-5">
      <div>
        <p className="section-title">Leaderboard</p>
        <h1 className="mt-2 text-3xl font-bold">Top Defenders</h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Compare simulation performance across the learning cohort.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {topThree.map((user, index) => (
          <div key={user.id} className="metric-card p-5" style={{ "--metric-color": index === 0 ? "var(--accent-amber)" : index === 1 ? "var(--accent-purple)" : "var(--accent-teal)" } as CSSProperties}>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.08)]">
                {index === 0 ? <Trophy size={21} /> : <Medal size={21} />}
              </span>
              <span className="text-sm font-bold text-[var(--text-secondary)]">#{index + 1}</span>
            </div>
            <h2 className="mt-5 text-lg font-bold">{user.name}</h2>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">{user.role}</p>
            <p className="mt-4 text-3xl font-black">{user.score.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-4">
          <p className="font-bold">Cohort Ranking</p>
          <span className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <Users size={15} />
            {total} active learners
          </span>
        </div>

        <div className="divide-y divide-[var(--border-subtle)]">
          {leaderboardUsers.map((user, index) => (
            <div key={user.id} className="grid gap-3 px-5 py-4 text-sm md:grid-cols-[56px_1fr_120px_120px_100px] md:items-center">
              <span className="font-bold text-[var(--text-secondary)]">#{index + 1}</span>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{user.role}</p>
              </div>
              <span>{user.score.toLocaleString()} pts</span>
              <span className="text-[var(--text-secondary)]">{user.accuracy} accuracy</span>
              <span className="flex items-center gap-1 font-semibold text-[var(--accent-teal)]">
                <TrendingUp size={14} />
                {user.trend}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
