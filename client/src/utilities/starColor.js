
export default function starColor(votes) {
    if (votes === 0) {
        return '#00F591'
    } else if (votes <= 1) {
        return '#FF0000'
    } else if (votes <= 2) {
        return '#FF0000'
    } else if (votes <= 3) {
        return '#DCA90A'
    } else if (votes <= 4) {
        return '#00EF3E'
    } else if (votes <= 5) {
        return '#78EF00'
    }

}
