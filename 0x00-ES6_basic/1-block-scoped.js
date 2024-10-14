export default function taskBlock(trueOrFalse) {
  const task = false; // Changed from var to let for block scope
  const task2 = true; // Changed from var to let for block scope

  if (trueOrFalse) {
    const task = true; // Block-scoped variable
    const task2 = false; // Block-scoped variable
  }

  return [task, task2]; // Returns the outer task and task2
}
