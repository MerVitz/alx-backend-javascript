const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];
  let response = 'This is the list of our students\n';

  try {
    const data = await countStudents(databasePath);
    response += data; // Use countStudents function output if it returns formatted data.
  } catch (err) {
    response += err.message;
  }

  res.send(response);
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

