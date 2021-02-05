import { formatDuration } from "date-fns";
import { intervalToDuration } from "date-fns";

export function formatDays(date: string) {
  if (date === "now") {
    return "heute";
  }

  const d = new Date(date);
  return new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
  }).format(d);
}

export function formatYear(date: string) {
  if (date === "now") {
    return "heute";
  }

  return new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
  }).format(new Date(date));
}

export function formatTimeAgo(from: string, to: string) {
  const dateFrom = new Date(from);
  const dateTo = to === "now" ? new Date() : new Date(to);
  const duration = intervalToDuration({ start: dateFrom, end: dateTo });
  return translateTimeAgo(
    formatDuration(duration, {
      format: ["years", "months", "weeks"],
    })
  );
}

function translateTimeAgo(ago: string) {
  return ago
    .replace("months", "Monate")
    .replace("month", "Monat")
    .replace("years", "Jahre")
    .replace("year", "Jahr");
}
