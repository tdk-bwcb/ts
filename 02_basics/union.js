var score = 33;
score = 44;
score = "55";
var hitesh = { name: "hitesh", id: 333 };
hitesh = { username: "hitesh", id: 333 };
// function getDbId(id: number | string){
//     console.log(`DB id is ${id}`);
// }
// getDbId(3)
// getDbId("yhuj")
function getDbId(id) {
    // id.toLowerCase() // -> ❌ sunce doesn't exist on string/number
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id += 2;
    }
}
// array
var data = [1, 2, 3];
var data1 = ["uho", "oihgu", "ui"];
var data2 = ["wqiurg", 234, "eoif"];
var data3 = ["wqiurg", 234, "eoif", true];
var pi = 3.14;
// pi = 3.145 // -> ❌
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" // -> ❌
