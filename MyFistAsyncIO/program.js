let fs = require("fs");

let filepath = process.argv[2];

function readnReturn(callback){

    fs.readFile(filepath, callback);

}

function printlnBreaks(err, content){

    if(err){
        console.log(err);
    }else{
        let splittedbfr = content.toString().split("\n");
        console.log(splittedbfr.length - 1);
    }
}

readnReturn(printlnBreaks);