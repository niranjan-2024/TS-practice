let score: number | string = 33;
score = "33";
// score = true 

type User = {
    name: string;
    id: number
}
type Admin = {
    username: string;
    id: number;
}

let jitesh: User | Admin = {
    name:"jitesh",
    id:334
}
jitesh = {
    username:"nyc",
    id:334
}

function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

function getDbNewId(id: number | string){
    // id.toLowerCase();  cant do this directly not verify 100% string
    if(typeof id === "string"){
        id.toLowerCase();
    }
}
//union narrowing


const data1: number[] = [1,2,3];
const data2: string[] = ["1","2"];
const data3: string[] | number[] = [1,2,3]; //either all strings or all numbers
const data4: (string | number)[] = [1,"2",3,"4"];

let pi:3.14 = 3.14;
// pi = 3.141 not allowed

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" 


