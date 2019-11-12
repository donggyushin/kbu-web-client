
export const convertStringToTimeInteger = (string) => {
    return parseInt(string.split(':')[0] * 60 + parseInt(string.split(':')[1]))
}