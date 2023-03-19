const getSameCount = (arr1, arr2) => {
    const uniqArr1 = new Set(arr1);
    const uniqArr2 = new Set(arr2);
    let count = 0;
    uniqArr1.forEach((value) => {
      if (uniqArr2.has(value)) {
        count++;
      }
    });
    return count;
  };
  
  export default getSameCount;