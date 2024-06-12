const express = require('express');

const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.status(200).send(
    'Hello Holberton School!',
  );
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
