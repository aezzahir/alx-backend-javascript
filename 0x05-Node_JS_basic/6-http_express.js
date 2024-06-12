const express = require('express');

const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
