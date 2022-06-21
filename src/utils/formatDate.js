export function formatDate(date) {
  const d = new Date(date),
    dtf = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "2-digit" }),
    [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  return `${da} ${mo}`;
}
