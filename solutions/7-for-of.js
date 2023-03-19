const calculateAverage = (arr) => {
    if (arr.length == 0) {
        return null;
    }
    let s = 0;
    for (let i of arr) {
        s += i;
    }
    return s / arr.length;
}


export default calculateAverage;
// END