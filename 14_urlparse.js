var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=march&year=2021'
var q = url.parse(adr, true);

console.log();
console.log('  host   : ' + q.host);
console.log('pathname : ' + q.pathname);
console.log(' search  : ' + q.search);

var qData = q.query;
console.log();
console.log(qData);
console.log('  year   : ' + qData.year);
console.log('  month  : ' + qData.month);