let greetings : string = "Hello Hitesh";
console.log(greetings);

let myNum = 6
greetings.toLowerCase() // -> ✅
// myNum.toLowerCase() // -> ❌

export {}


// javascript does not have a special runtime value for integers, 
// so there is no equivaent to int or float - everything is simply a number


// number

let userId : number = 334456
let userId1 : number = 334456.8767


// boolean

let isLoggedIn : boolean = false


// any
// not sure of the type
// let hero; // -> ❌
let hero : string; // -> ✅
function getHero(){
    return "Thor"
}
hero = getHero() // -> here hero : any
// not preferred. 


