export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value; // Create the new value
  }

  return array.map((value) => appendString + value); // Map to new array values
}
