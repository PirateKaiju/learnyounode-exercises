let http = require("http");
let url = require("url");

let port = process.argv[2];

let server = http.createServer((req, res) => {
    let requesturl = url.parse(req.url, true);

    if(requesturl.pathname == "/api/parsetime"){

        let reqrawdata = requesturl.query;

        let reqdate = new Date(reqrawdata.iso);

        res.writeHead(200, {'Content-Type': 'application/json'});

        let resdata = {hour: reqdate.getHours(), minute: reqdate.getMinutes(), second: reqdate.getSeconds()};

        res.write(JSON.stringify(resdata));

        res.end();

    }else if(requesturl.pathname == "/api/unixtime"){

        let reqrawdata = requesturl.query;
        
        let reqdate = new Date(reqrawdata.iso);

        res.writeHead(200, {'Content-Type': 'application/json'});

        let resdata = {unixtime: reqdate.getTime()};
        
        res.write(JSON.stringify(resdata));

        res.end();

    }


});

server.listen(port);