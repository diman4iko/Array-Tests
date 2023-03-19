// BEGIN
export const flatten = (arr) => {
  let resarr = [];
  for (let element of arr) {
      if (typeof(element) == 'object') {
          resarr.push(...element)
      } else {
          resarr.push(element)
      }
  }
  return resarr
}
// END