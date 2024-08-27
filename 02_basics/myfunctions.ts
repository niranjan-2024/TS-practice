function addTwo(num:number){
    // num.toUpperCase(); not possible in case of number
    // return num+2;
    return "hello";
}

addTwo(5);
// addTwo("5"); not possible in case of numbers

function getUpper(val:string){
    return val.toUpperCase();
}
// getUpper(4);
getUpper("abc");

function signUpUser(name:string, email:string, isPaid:boolean){

}
// signUpUser(1,2,3); defeat the purpose of having typescript
signUpUser("non","non@microsoft.com",true);

let loginUser = (name:string, email:string, isPaid:boolean = false) => {  //default balue

}
loginUser("h","h@h.com");

//return accurate type and value
function addThree(num:number): number{
    return num+3;
    // return "hello"  this cannot be done
}

//returning more than one types problem   union talking later 
function getValue(myVal:number): boolean{ 
    if(myVal > 5){
        return true;
    }
    // return "200 OK";
    return false;
}

//wrong if not return any value in arrow function
// const getHello = (s:string): string => {

// }
const getHello = (s:string): string => {
    return "";
}

const heros = ["thor","spiderman","ironman"];
// const heros = [1,2,3,4,5]                     //typescript is smart enough to know type
heros.map((hero:string): string => {
    return `hero is ${hero}`
    // return 1;
});

function consoleError(errmsg:string):void{  // returning void
    console.log(errmsg);
    // return 1
}

function handleError(errmsg:string):never{  //not returning anything ever , never return value , more robust handling
    throw new Error(errmsg);
}

export{};