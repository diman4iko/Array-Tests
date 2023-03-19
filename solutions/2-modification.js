
export function swap(arr) {
    if (arr.length < 2) {
        return arr;
    }
    else { let element;
element = arr[(arr.length - 1)];
arr[(arr.length - 1)] = arr[0];
arr[0] = element;
return arr;
} }


