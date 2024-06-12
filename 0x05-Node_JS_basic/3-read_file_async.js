const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1); // Exclude the header line
        const numberOfStudents = students.length;
        console.log(`Number of students: ${numberOfStudents}`);

        const fields = {};
        for (const student of students) {
          const [firstname, , , field] = student.split(',');
          if (firstname !== '') {
            if (fields[field]) {
              fields[field].push(firstname);
            } else {
              fields[field] = [firstname];
            }
          }
        }

        for (const [field, students] of Object.entries(fields)) {
          const numberOfStudentsInField = students.length;
          const studentList = students.join(', ');
          console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${studentList}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
