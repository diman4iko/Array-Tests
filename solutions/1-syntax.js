
export function getWeekends(size) {
  let ShortData = ['sat', 'sun'];
  let LongData = ['saturday', 'sunday'];
  if (size == "short") {
    return ShortData;
  }
  else {
    return LongData;
  }
}

