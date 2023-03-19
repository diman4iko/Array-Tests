const addPrefixToStringArray = (arr, prefix) => {
    return arr.map(item => `${prefix} ${item}`);
  }
  
  export default addPrefixToStringArray;