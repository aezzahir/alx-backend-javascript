const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const lines = data.trim().split("\n");
    const students = lines.slice(1); // Remove the header line

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student.split(",");
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }

    for (const [field, students] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(", ")}`
      );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
