const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const database = process.argv[2];
    console.log(`Database path: ${database}`); // Log the database path

    if (database) {
      try {
        const data = await countStudents(database);
        res.write(data);
      } catch (error) {
        res.write(`Error: ${error.message}`);
      }
    } else {
      res.write('Database not provided');
    }
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not Found');
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
