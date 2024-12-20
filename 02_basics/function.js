"use strict";
// function addTwo(num){
//     num.toUpperCase()
//     return num + 2;
// }
// addTwo("5")
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2
    return "hello";
}
var myValue = addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("eifsh");
function signUpUser(name, email, password) {
}
signUpUser(1, 2, 3); // -> ✅
function signUpUser1(name, email, password, isLoggedIn) {
}
signUpUser1("weiy", "eroihg", "eorihg", true); // -> ✅
var loginUser = function (name, email, isPaid) {
};
// loginUser("uahs", "weofug") // -> ❌
var loginUser1 = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser1("uahs", "weofug"); // -> ✅
