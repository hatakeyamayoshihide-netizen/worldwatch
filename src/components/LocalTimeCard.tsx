type LocalTimeCardProps = {
  timeZone: string;
  dateLabel: string;
  timeLabel: string;
  inputValue: string;
  isManual: boolean;
  offsetLabel?: string;
  onChange: (value: string) => void;
  onReset: () => void;
};

export default function LocalTimeCard({
  timeZone,
  dateLabel,
  timeLabel,
  inputValue,
  isManual,
  offsetLabel,
  onChange,
  onReset,
}: LocalTimeCardProps) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_0_40px_-15px_rgba(129,140,248,0.6)] backdrop-blur-xl sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
          現在地
        </span>
        {offsetLabel && (
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60">
            UTC{offsetLabel.replace("GMT", "")}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          ローカルタイム
        </h2>
        <p className="mt-1 text-sm text-white/50">{timeZone}</p>
      </div>

      <p className="mt-6 font-mono text-5xl font-light tracking-tight text-white tabular-nums sm:text-6xl">
        {timeLabel}
      </p>
      <p className="mt-2 text-sm text-white/60">{dateLabel}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
        <label htmlFor="local-datetime" className="sr-only">
          現在地の日時を入力
        </label>
        <input
          id="local-datetime"
          type="datetime-local"
          value={inputValue}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white outline-none [color-scheme:dark] hover:border-white/25 focus:border-indigo-300/60"
        />
        {isManual && (
          <button
            type="button"
            onClick={onReset}
            className="shrink-0 rounded-full border border-white/15 px-3 py-2 text-xs text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            今の時刻に戻す
          </button>
        )}
      </div>

      <p className="mt-3 text-xs text-white/40">
        {isManual
          ? "手動で入力した日時をもとに表示しています。"
          : "日時を入力すると、その時刻で都市の時刻を計算します。"}
      </p>
    </div>
  );
}
