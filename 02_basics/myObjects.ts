const user = {
    name:"jitesh",
    email:"h@h.com",
    isActive:true
}

function createUSer({name:string,isPaid:boolean}){}
createUSer({name:"hitesh",isPaid:false});

function createCourse():{name:string,price:number}{
    return {name:"reactJS",price:399};
} //(parameter):{return type}{function definition}

let newUSer = {name:"h",isPaid:false,email:"h@h.com"};
createUSer(newUSer);


//Type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

// type Mystring = string // it is allowed and wierd too only renaiming things

function createNewUser(user:User):User{
    return {name:"",email:"",isActive:true};
}
createNewUser({name:"",email:"",isActive:true});


type newUser = {
    readonly _id: string  //wont be able to change anymore after declaration
    name: string;
    email: string;
    isActive: boolean;
    creditCardDeatils?: number;   //? optional
}
let myUSer: newUser = {
    _id:"123",
    name:"h",
    email:"h@h.com",
    isActive:false
}
myUSer.email = "h@h.cnfnf"
// myUSer._id = "asa";   readonly odes not allowed this



type cardNumber = {
    cardnumber:string
}
type cardDate = {
    cardDate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number;
}


export{}