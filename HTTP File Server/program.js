let http = require("http")
let fs = require("fs")

let port = process.argv[2];
let file = process.argv[3];

let server = http.createServer((req, res) => {

    let filestream = fs.createReadStream(file);

    filestream.pipe(res);


});

server.listen(port);