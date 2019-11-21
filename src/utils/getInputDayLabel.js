

export default function (year, month2, day2) {
    const week = new Array('일', '월', '화', '수', '목', '금', '토')
    console.log('month: ', month2)
    console.log('day: ', day2)
    let day = day2
    let month = month2

    if (month2.length === 1) {
        month = '0' + month2
    }

    if (day.length === 1) {
        day = '0' + day
    }
    const todayString = year + '-' + month + '-' + day
    const today = new Date(todayString).getDay();
    const todayLabel = week[today]

    return todayLabel
}