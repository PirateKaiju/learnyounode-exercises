let fs = require("fs");
let path = require("path");

function filteredLS(dir, ext, callback){

    fs.readdir(dir, (err, list) => {
        if(err){
            return callback(err);
        }else{
            //return callback(err, list, ext);
            let filtered = list.filter((element) => {
                return (path.extname(element) == "."+ext);
            });

            return callback(err, filtered);
        }
    });

}

module.exports = filteredLS;