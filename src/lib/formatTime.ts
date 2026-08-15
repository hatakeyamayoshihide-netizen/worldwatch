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

/** Formats a Date as a `datetime-local` input value using the browser's own
 * local timezone (which is what `<input type="datetime-local">` always uses). */
export function toDateTimeLocalValue(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
