"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "jitesh",
    email: "h@h.com",
    isActive: true
};
function createUSer(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUSer({ name: "hitesh", isPaid: false });
function createCourse() {
    return { name: "reactJS", price: 399 };
} //(parameter):{return type}{function definition}
var newUSer = { name: "h", isPaid: false, email: "h@h.com" };
createUSer(newUSer);
// type Mystring = string // it is allowed and wierd too only renaiming things
function createNewUser(user) {
    return { name: "", email: "", isActive: true };
}
createNewUser({ name: "", email: "", isActive: true });
var myUSer = {
    _id: "123",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUSer.email = "h@h.cnfnf";
