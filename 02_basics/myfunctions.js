"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase(); not possible in case of number
    // return num+2;
    return "hello";
}
addTwo(5);
// addTwo("5"); not possible in case of numbers
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4);
getUpper("abc");
function signUpUser(name, email, isPaid) {
}
// signUpUser(1,2,3); defeat the purpose of having typescript
signUpUser("non", "non@microsoft.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("h", "h@h.com");
//return accurate type and value
function addThree(num) {
    return num + 3;
    // return "hello"  this cannot be done
}
//returning more than one types problem   union talking later 
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    // return "200 OK";
    return false;
}
//wrong if not return any value in arrow function
// const getHello = (s:string): string => {
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3,4,5]                     //typescript is smart enough to know type
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1;
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
