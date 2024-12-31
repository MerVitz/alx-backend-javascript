// 9-hoisting.js
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() { return this._year; }
  get location() { return this._location; }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', class2020),
  new StudentHolberton('John', 'Doe', class2020),
  new StudentHolberton('Albert', 'Clinton', class2019),
  new StudentHolberton('Donald', 'Bush', class2019),
  new StudentHolberton('Jason', 'Sandler', class2019),
];
