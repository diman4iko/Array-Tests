const getMax = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };
  export default getMax;