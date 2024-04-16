export default function hasValuesFromArray(set, array) {
  return array.some((item) => set.has(item));
}
