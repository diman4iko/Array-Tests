const getSameParity = (arr) => {
    const firstElemParity = Math.abs(arr[0] % 2);
    return arr.filter((num) => Math.abs(num % 2) === firstElemParity);
  };
  
  export default getSameParity;