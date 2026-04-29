export default function Items() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[var(--color-primary)]">
        <span>Partidos en vivo</span>
      </h2>
      <div className="bg-[var(--color-card)] p-4 rounded-xl border border-white/10">
        <div className="flex justify-between">
          <span>River</span>
          <span className="font-bold text-lg text-[var(--color-primary)]">
            1 - 2
          </span>
          <span>Boca</span>
        </div>
        <div className="text-xs text-gray-400 mt-2">
          75' • En vivo
        </div>
      </div>
    </div>
  );
}