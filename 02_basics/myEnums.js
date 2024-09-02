"use strict";
//restrict the user chocie between some options only
Object.defineProperty(exports, "__esModule", { value: true });
//not good code
// const AISLE = 0;
// const MIDDEL = 1;
// const WINDOWN = 2;
// if(seat == 0){}
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 5] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice["WINDOW"] = "Khidki";
    SeatChoice[SeatChoice["FOURTH"] = 4] = "FOURTH";
    SeatChoice[SeatChoice["FIFTH"] = 5] = "FIFTH";
})(SeatChoice || (SeatChoice = {}));
//enums converts to iife(immediate invoked function expression) when converted from typescript to javascript
var hcSeat = SeatChoice.MIDDLE;
var newhcSeat = 22 /* newSeatChoice.MIDDLE */;
