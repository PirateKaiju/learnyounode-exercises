let values = (process.argv.slice(2));

//console.log(values);

//console.log(values.reduce((sum, value) => { return sum + Number(value)}, 0));

let sum = 0;

for(let index = 0; index < values.length; index++){
    sum += Number(values[index]);
}

console.log(sum);
