let fs = require("fs");

let filepath = process.argv[2];

let bfr = fs.readFileSync(filepath);

let splitted = bfr.toString().split("\n");

let ans = splitted.length > 0 ? splitted.length - 1 : 0;

console.log(ans);