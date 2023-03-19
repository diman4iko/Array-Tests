export const get = (arr, index, normal = null) => {
    
    if (index < arr.length && index >= 0) {
        return arr[index];
    } 
    else {
        return normal;
    }
}