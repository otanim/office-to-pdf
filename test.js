const toPdf = require("./");
const fs = require("fs");

const word = fs.readFileSync("./test.docx");

toPdf(word, 20).then(
  (buffer) => {
    fs.writeFileSync("./test.pdf", buffer)
  }, (err) => {
    console.log(err)
  }
);
