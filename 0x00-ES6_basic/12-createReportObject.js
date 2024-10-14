export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Using spread syntax to copy employeesList
    getNumberOfDepartments() { // Method property using ES6 syntax
      return Object.keys(this.allEmployees).length; // Counting the number of departments
    },
  };
}
