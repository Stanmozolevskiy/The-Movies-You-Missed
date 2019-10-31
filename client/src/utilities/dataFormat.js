import date from "date-and-time";

export default function formatDate(data, format = "MMMM YYYY ") {
  if (data === null || data === undefined) {
    return "Unknown";
  }
  const now = new Date(data);
  return date.format(now, format);
}
