// const superHeros = []  //array of type never

// const superHeros = ["nj",12,true];

const superHeros: string[] = [];
superHeros.push("spiderman");

const heroPower: number[] = [];
heroPower.push(2);


//another way of defining same way more than one way syntax is simple
const heroSuper : Array<number> = []

type User = {
    name:string;
    isActive: boolean;
}
const allUSer : User[] = [];
// allUSer.push("")              wrong
// allUSer.push({})              wrong
allUSer.push({name:"",isActive:true});
// allUSer.push({"fs",true});    wrong

//2d array type
const MLMoldels: number[][] = [
    [255,255,255],
    // ""
]