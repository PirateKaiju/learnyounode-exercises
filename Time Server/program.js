let net = require("net");

let port = process.argv[2];

function fillStringZeros(number){

    return number > 9 ? "" + number : "0" + number;

}

let server = net.createServer((socket) => {

    let date = new Date();

    let writedata = "" + date.getFullYear();

    let month = (date.getMonth() + 1);

    writedata += "-" + fillStringZeros(month);
    writedata += "-" + fillStringZeros(date.getDate());
    writedata += " " + date.getHours() + ":" + date.getMinutes() + "\n";

    socket.write(writedata);
    socket.end();

});

server.listen(port);
