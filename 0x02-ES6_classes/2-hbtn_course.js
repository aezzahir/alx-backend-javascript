export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
      || students.some((student) => typeof student !== 'string')
    ) {
      throw new TypeError('Type Error');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    this._name = newName;
  }

  set length(newLength) {
    this._length = newLength;
  }

  set students(newStudents) {
    if (
      !Array.isArray(newStudents)
      || newStudents.some((student) => typeof student !== 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
