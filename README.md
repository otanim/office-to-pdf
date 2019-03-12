office-to-pdf
=====

## Prerequests
make sure you have installed latest version of libreoffice:

libreoffice required. 
Test if the command 'soffice' is available in your console.

Example:
```
var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("./test.docx")

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.writeFileSync("./test.pdf", pdfBuffer)
  }, (err) => {
    console.log(err)
  }
)

```

in Node >v7 you can do (very pretty):

```
import toPdf from 'office-to-pdf'

var pdfBuffer = await toPdf(wordBuffer)

```

as you see toPdf just returns a promise