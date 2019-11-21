

export default function (year, month, day) {
    const week = new Array('일', '월', '화', '수', '목', '금', '토')
    console.log('month: ', month)
    console.log('day: ', day)
    const todayString = year + '-' + month + '-' + day
    const today = new Date(todayString).getDay();
    const todayLabel = week[today]

    return todayLabel
}