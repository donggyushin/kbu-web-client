
export const convertStringToTimeInteger = (string) => {
    return parseInt(string.split(':')[0] * 60 + parseInt(string.split(':')[1]))
}

export const convertTimeIntToString = (int) => {
    return parseInt(int / 60).toString()
}

export const convertMinutesToHour = (minute) => {
    return parseInt(minute / 60);
}