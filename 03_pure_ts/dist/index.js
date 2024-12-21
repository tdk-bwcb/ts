"use strict";
// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(num) {
        if (num <= 1) {
            throw new Error("Not valid");
        }
        else {
            this._courseCount = num;
        }
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4; // -> ❌ private
    }
}
const hitesh = new User("hc@h.com", "hc");
// hitesh.city = "Jaipur"
// hitesh.deleteToken() // -> ❌
