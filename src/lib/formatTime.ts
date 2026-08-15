export function formatDateTime(date: Date, timeZone: string) {
  const dateLabel = new Intl.DateTimeFormat("ja-JP", {
    timeZone,
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);

  const timeLabel = new Intl.DateTimeFormat("ja-JP", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  const offsetLabel = new Intl.DateTimeFormat("ja-JP", {
    timeZone,
    timeZoneName: "shortOffset",
  })
    .formatToParts(date)
    .find((part) => part.type === "timeZoneName")?.value;

  return { dateLabel, timeLabel, offsetLabel: offsetLabel ?? "" };
}
