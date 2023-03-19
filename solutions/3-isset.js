// BEGIN
export function issett(arr, number, defaultnum) {
    if (arr.length < (number - 1)) {
        return arr[(number) - 1];
    }
    else {
        return defaultnum;
    }
}
