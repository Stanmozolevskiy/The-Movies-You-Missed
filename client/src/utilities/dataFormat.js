import date from "date-and-time";

export default function formatDate(data , format="MMMM YYYY ") {

    const now = new Date(data);
    return date.format(now,  format);

}