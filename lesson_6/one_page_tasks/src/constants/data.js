export function divideDigits(number) {
    return number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,'$1 $2 $3 $4');
}