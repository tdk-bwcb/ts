// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
// if(seat === 0 ){
// }
// enum seatChoice {
//     AISLE,
//     WINDOW,
//     MIDDLE,
//     FOURTH
// }
// each get incremental values def = 0,1,2.. (number)
var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "qwe";
    seatChoice[seatChoice["WINDOW"] = 34] = "WINDOW";
    seatChoice[seatChoice["MIDDLE"] = 35] = "MIDDLE";
    seatChoice[seatChoice["FOURTH"] = 36] = "FOURTH";
})(seatChoice || (seatChoice = {}));
// if one of them is string, specify any one other = number / all others specifically
var hcseat = seatChoice.AISLE;
