export default function taskBlock(trueOrFalse) {
  let task = false; // Outer scope variable
  let task2 = true; // Outer scope variable

  if (trueOrFalse) {
    task = true; // Assign to the outer variable
    task2 = false; // Assign to the outer variable
  }

  return [task, task2]; // Return the modified outer variables
}
