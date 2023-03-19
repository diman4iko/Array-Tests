export default function countUniqChars(str) {
    const uniqChars = new Set();
    for (let i = 0; i < str.length; i += 1) {
      uniqChars.add(str[i]);
    }
    return uniqChars.size;
  }
 