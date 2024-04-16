const weakMap = new WeakMap();
export { weakMap };

// Function to query the API
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the WeakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the initial value to 1
    weakMap.set(endpoint, 1);
  } else {
    // If it exists, increment the count
    let count = weakMap.get(endpoint);
    count += 1;
    weakMap.set(endpoint, count);
    // Check if the number of queries is >= 5
    if (count >= 5) {
      // If so, throw an error
      throw new Error('Endpoint load is high');
    }
  }
}
