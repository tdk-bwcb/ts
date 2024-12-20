let score: number | string = 33

score = 44

score = "55"





type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let hitesh: User | Admin = {name: "hitesh", id: 333}

hitesh = {username: "hitesh", id: 333}





// function getDbId(id: number | string){
//     console.log(`DB id is ${id}`);
// }
// getDbId(3)
// getDbId("yhuj")

function getDbId(id: number | string){
    // id.toLowerCase() // -> ❌ sunce doesn't exist on string/number
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id += 2 
    }
}



// array

const data: number[] = [1,2,3]
const data1: string[] = ["uho", "oihgu", "ui"]
const data2: (number | string)[] = ["wqiurg", 234, "eoif"]
const data3: any[] = ["wqiurg", 234, "eoif", true]

let pi:3.14 = 3.14
// pi = 3.145 // -> ❌


let seatAllotment : "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" // -> ❌




