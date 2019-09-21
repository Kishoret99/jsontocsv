const JSONStream = require('Jsonstream');
const { mapSync } = require('event-stream');
const { createReadStream } = require('fs');
const FILE_PATH = '';

module.exports = {
    jsonToCsv: (file) => createReadStream(file)
                            .pipe(JSONStream.parse('*'))
                            .pipe(mapSync(data => {
                                const styled = 
                                `
                                ----------------------XXXXXXX----------------------
                                ${data}
                                 ----------------------XXXXXXX----------------------
                                `
                                 return styled;
                            }))
}