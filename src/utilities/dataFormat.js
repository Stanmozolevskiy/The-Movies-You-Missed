import date from "date-and-time";

export default function formatDate(data) {

    const now = new Date(data);
    return date.format(now, "MMMM YYYY ");

}