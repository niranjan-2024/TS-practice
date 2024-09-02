//tuples

// const user: (string|number)[] = ["hc",1];

let user: [string, number, boolean]
user = ["hc",123,true]; //order of datatypes is mandatory
//helps in api calls

let rgb:[number,number,number] = [255,234,112];

type User = [number,string];
const newUSer:User = [112,"email"];
newUSer[1] = "email changed"

newUSer.push("tr");
//this is a problem in typescript , why this happens? 



