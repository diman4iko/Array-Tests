// BEGIN
const getSameParity = (arr) => {
  if (arr.length == 0) {
      return [];
  }
  let resultarr = [];
  for (let i of arr) {
      if (Math.abs(i % 2) == Math.abs(arr[0] % 2)) {
          resultarr.push(i)
      }
  }
  return resultarr
}
export default getSameParity;
// END