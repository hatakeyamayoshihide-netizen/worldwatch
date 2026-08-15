type ClockCardProps = {
  label: string;
  place: string;
  subLabel?: string;
  dateLabel: string;
  timeLabel: string;
  offsetLabel?: string;
  accent?: boolean;
};

export default function ClockCard({
  label,
  place,
  subLabel,
  dateLabel,
  timeLabel,
  offsetLabel,
  accent,
}: ClockCardProps) {
  return (
    <div
      className={`rounded-3xl border p-6 backdrop-blur-xl transition-colors sm:p-8 ${
        accent
          ? "border-white/15 bg-white/10 shadow-[0_0_40px_-15px_rgba(129,140,248,0.6)]"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
          {label}
        </span>
        {offsetLabel && (
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60">
            UTC{offsetLabel.replace("GMT", "")}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{place}</h2>
        {subLabel && <p className="mt-1 text-sm text-white/50">{subLabel}</p>}
      </div>

      <p className="mt-6 font-mono text-5xl font-light tracking-tight text-white tabular-nums sm:text-6xl">
        {timeLabel}
      </p>
      <p className="mt-2 text-sm text-white/60">{dateLabel}</p>
    </div>
  );
}
