export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const value of newArray) {
    const idx = newArray.indexOf(value);
    newArray[idx] = appendString + value;
  }

  return newArray;
}
