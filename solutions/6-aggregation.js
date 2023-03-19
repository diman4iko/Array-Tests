export function calculateSum(arr){
    let s = 0;

    for (let i of arr) {

        if (i % 3 == 0) {
            s += i;
        }
    }
    
    return s;
}