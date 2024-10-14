export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold employee names

  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Add each employee to the array
  }

  return employeeNames.join(' | '); // Join the names with ' | ' separator
}
