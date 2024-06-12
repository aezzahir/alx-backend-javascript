const express = require('express');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  console.log(`Database path: ${database}`);
  countStudents(database)
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(data);
      res.end();
    })
    .catch((error) => {
      res.write('This is the list of our students\n');
      res.write(error.message);
      res.end();
    });
});

app.use(express.static(__dirname));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'not_found.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
