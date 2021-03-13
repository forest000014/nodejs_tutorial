var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is conetent ~_~', function (err){
    if(err) throw err;
    console.log('saved!!');
});