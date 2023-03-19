export default function calculateAverage(arr1) {
    let iteration = 0;
    let summ = 0;
    let average;

    while (arr1.length < iteration) {
        summ = arr1[iteration] + summ;
        iteration = iteration + 1;
    }
    average = summ / (arr1.length - 1);
    return average;
}

