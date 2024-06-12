const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Path to the database is not provided'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      resolve('No students found');
      return;
    }

    const studentCount = lines.length - 1;
    const fields = {};

    lines.slice(1).forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    let result = `Number of students: ${studentCount}\n`;
    for (const [field, students] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    resolve(result.trim());
  });
});

module.exports = countStudents;
