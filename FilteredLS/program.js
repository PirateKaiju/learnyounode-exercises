let fs = require("fs");
let path = require("path");

let dir = process.argv[2];
let ext = process.argv[3];

function filteredLS(dir, ext){

    fs.readdir(dir, (err, list) => {

        if(err){
            console.log(err);
        }else{
            list.forEach((element) => {
                if(path.extname(element) == "."+ext){

                    console.log(element);

                }
            });
        }
    });

}

filteredLS(dir, ext);