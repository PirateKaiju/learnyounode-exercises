let fs = require("fs");
let path = require("path");

let mod = require("./mod.js");

let dir = process.argv[2];
let ext = process.argv[3];

function filterShow(err, list){

    if(err){
        console.log(err);
    }else{

        // list.forEach((element) => {
        //     if(path.extname(element) == "."+ext){

        //         console.log(element);

        //     }
        // });

        list.forEach(element => {
            console.log(element);
        });


    }

}

mod(dir, ext, filterShow);