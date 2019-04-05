var showtimes = require('./genShowtime');
//end is not included
var seeds = showtimes()
console.log(seeds.length);
var bulk1 = seeds.slice(0, 262500);
console.log(bulk1.length);


var bulk2 = seeds.slice(525000, 1050000);
console.log(bulk2.length);

var bulk3 = seeds.slice(1050000, 1575000);
console.log(bulk3.length);

var bulk4 = seeds.slice(1575000);
console.log(bulk4.length);

