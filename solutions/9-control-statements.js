// BEGIN
const getTotalAmount = (arr, currency) => {
    let s = 0;

    for (let i of arr) {
        let a = i.split(' ');
        let wallet = a[0]
        let value = Number(a[1])
        if (wallet == currency) {
            s += value;
        }
    }
    return s;
}
export default getTotalAmount;
// END