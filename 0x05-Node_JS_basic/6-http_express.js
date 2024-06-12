const express = require('express');
const path = require('path');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Serve static files from the current directory
app.use(express.static(__dirname));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'not_found.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
