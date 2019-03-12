office-to-pdf
=====

## Prerequests
Make sure you have installed latest version of libreoffice:
```bash
sudo apt-get install libreoffice-base -y
sudo add-apt-repository ppa:libreoffice/ppa -y
sudo apt-get update
sudo apt-get install libreoffice -y
```

### To check LibreOffice's version:
```bash
soffice --version
```
It will be good if you have installed 6.1.x version, 5.x has failed several times.

### Example:
```javascript
const toPdf = require("office-to-pdf");
const fs = require("fs");
const wordBuffer = fs.readFileSync("./test.docx");

toPdf(wordBuffer, 10)
  .then((pdfBuffer) => {
    fs.writeFileSync("./test.pdf", pdfBuffer)
  })
  .catch((err) => {
     console.log(err)
  });
```
Here `wordBuffer` is buffer of **test.docx** file, and `10` is timeout for conversion **in seconds**.  
If script didn't have converted file within **10s**, it will throw an error.  
Default value for timeout is **60s**.