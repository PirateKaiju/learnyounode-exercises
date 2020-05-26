let http = require("http");

let url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding("utf8");
    let stream = "";
    response.on("data", (data) => {
        stream += data;
    });

    response.on("end", () => {
        
        console.log(stream.length);
        console.log(stream);
        
    })

});