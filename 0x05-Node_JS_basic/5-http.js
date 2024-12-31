const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    const databasePath = process.argv[2];

    try {
      await countStudents(databasePath);
    } catch (err) {
      res.end(err.message);
      return;
    }

    res.end();
  }
});

app.listen(1245);

module.exports = app;
