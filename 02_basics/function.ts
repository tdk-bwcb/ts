// function addTwo(num){
//     num.toUpperCase()
//     return num + 2;
// }
// addTwo("5")

function addTwo(num : number): number{
    return num + 2
    // return "hello"
}
let myValue = addTwo(5)


function getUpper(val : string){
    return val.toUpperCase()
}
getUpper("eifsh")


function signUpUser(name, email, password){
}
signUpUser(1,2,3) // -> ✅


function signUpUser1(name: string, email: string, password: string, isLoggedIn: boolean ){
}
signUpUser1("weiy", "eroihg", "eorihg", true) // -> ✅


let loginUser = (name: string, email: string, isPaid: boolean) => {
}
// loginUser("uahs", "weofug") // -> ❌


let loginUser1 = (name: string, email: string, isPaid: boolean = false) => {
}
loginUser1("uahs", "weofug") // -> ✅
 

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     else{
//         return "200 K"
//     }
// }


const getHello = (s: string) : string => {
    return ""
}


// const heros = ["thor", "ironman", "spiderman"]
const heros = [1, 2, 3]

// heros.map(hero => {
//     return `hero is ${hero}`
// }) // -> ✅

heros.map((hero): string => {
     return `hero is ${hero}` // -> ✅
    // return 5 // -> ❌
})

// ts automatically identifies type of the value



function consoleError(errmsg: string) : void{
    console.log(errmsg);
}


function handleError(errmsg: string): never{
    // console.log(errmsg);   
    throw new Error(errmsg)
}


export{} 