export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary,#05080f)]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[rgba(240,163,58,0.3)] border-t-[rgba(240,163,58,0.9)]" />
    </div>
  );
}
