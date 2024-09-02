interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    startTrail: () => string,
    startAnother(): string,
    getCoupon(couponname:string,value:number):number,
}

//diff between type and interface , interface is loose form of class, method name same but not implementation
//helps in bulky code

const jites:Admin = {
    dbId:21,
    email: "H@g.com",
    userId:2211,
    startTrail :() => {
        return "trail started"
    },
    startAnother(){
        return "same"
    },
    getCoupon:(name:"jitesh",off:10) => {
        return 10;
    },
    githubToken: "github",
    role:"admin"
}

jites.email = "can change";
// jites.dbId = "no change possible"


//reopening the interfaces -> just adding more values to the interfaces
interface User{
    githubToken:string
}

// Advantage of interface is inheritance
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

//type cannot be re-opened to add new properties vs an inteface which is always extendable

