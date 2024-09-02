//restrict the user chocie between some options only

//not good code
// const AISLE = 0;
// const MIDDEL = 1;
// const WINDOWN = 2;
// if(seat == 0){}


enum SeatChoice{
    AISLE = 5, //intitiallu default start from 0
    MIDDLE = 22,
    WINDOW = "Khidki", // always provide values beacuse patternn broken
    FOURTH = 4 ,
    FIFTH
}
//enums converts to iife(immediate invoked function expression) when converted from typescript to javascript

const hcSeat = SeatChoice.MIDDLE;

const enum newSeatChoice{
    AISLE = 5, //intitiallu default start from 0
    MIDDLE = 22,
    WINDOW = "Khidki", // always provide values beacuse patternn broken
    FOURTH = 4 ,
    FIFTH
}

const newhcSeat = newSeatChoice.MIDDLE;

//use const enum for not generationg a crazy javascript code, js code generated must be clean
export{};