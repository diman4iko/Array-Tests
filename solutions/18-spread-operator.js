const flatten = (arr) => arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...flatten(item)];
    }
    return [...acc, item];
  }, []);
  
  export default flatten;