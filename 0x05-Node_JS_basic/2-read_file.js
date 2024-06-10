const fs = require("fs");

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, "utf8"),
     lines = data.trim().split("\n"),
     students = lines.slice(1), // Exclude the header line
     numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student.split(",");
      if (firstname !== "") {
        if (fields[field]) {
          fields[field].push(firstname);
        } else {
          fields[field] = [firstname];
        }
      }
    }

    for (const [field, students] of Object.entries(fields)) {
      const numberOfStudentsInField = students.length,
       studentList = students.join(", ");
      console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${studentList}`);
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
