const fs = require('fs');
const path = require('path');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};

      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;

