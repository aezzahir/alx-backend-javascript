export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  for (const element of set) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      result = result.concat(element.substring(startString.length), '-');
    }
  }
  if (result.length > 0) {
    result = result.substring(0, result.length - 1);
  }
  return result;
}
