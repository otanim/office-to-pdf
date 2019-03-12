const tmp = require('temporary');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const TIMEOUT = 60;

module.exports = (buffer, timeout = TIMEOUT) => {
  return new Promise((resolve, reject) => {

    const file = new tmp.File();
    const filePath = file.path;
    const {path: outputDirectoryPath} = new tmp.Dir();

    file.writeFile(buffer, (err) => {
      if (err) reject(err);

      const cmd = `timeout ${timeout} soffice --headless --convert-to pdf ${filePath} --outdir ${outputDirectoryPath}`;

      exec(cmd, function (error, stdout, stderr) {
        if (error) {
          reject(error)
        } else {
          const pathToPdfFile = `${path.join(outputDirectoryPath, path.basename(filePath, path.extname(path.basename(filePath))))}.pdf`;

          fs.readFile(pathToPdfFile, (err, buffer) => {
            if (err) reject(err);
            resolve(buffer)
          })
        }
      });

    });

  });
};
