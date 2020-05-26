let http = require("http");

let url = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let stack = [false, false, false];

http.get(url, (response) => { //Refactor as function later
    response.setEncoding("utf8");
    let stream = "";
    response.on("data", (data) => {
        stream += data;
    });

    response.on("end", () => {
        
        //console.log(stream.length);
        //console.log(stream);
        stack[0] = stream;
        testStack();
        
    })

});

http.get(url2, (response) => {
    response.setEncoding("utf8");
    let stream = "";
    response.on("data", (data) => {
        stream += data;
    });

    response.on("end", () => {
        
        //console.log(stream.length);
        //console.log(stream);
        stack[1] = stream;
        testStack();
        
    })

});

http.get(url3, (response) => {
    response.setEncoding("utf8");
    let stream = "";
    response.on("data", (data) => {
        stream += data;
    });

    response.on("end", () => {
        
        //console.log(stream.length);
        //console.log(stream);
        stack[2] = stream;
        testStack();
        
    })

});

function testStack(){ //Calls stack to test if all requests are completed

    if(stack.every((val) => { return val; })){

        console.log(stack[0]);
        console.log(stack[1]);
        console.log(stack[2]);

    }

}

/*while(true){
    
    if(stack.every((val) => {val})){

        console.log(1);
        console.log(2);
        console.log(3);

    }
    
}*/