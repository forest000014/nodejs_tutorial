var fs = require('fs');

fs.rename('mynewfile1.txt', 'renamedfile.txt', function (err) {
    if (err) throw err;
    console.log("rename finished.");
});