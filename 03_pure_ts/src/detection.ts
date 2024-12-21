function detectType(val: number | string){
    // return val.toLowerCase()
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("provide id");
        return
    }
    id.toLowerCase()
}   


function printAll(strs: string | string[] | null){
    if(strs) {
        // array and null
        if(typeof strs === "object"){
            for(const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string"){
            console.log(strs);   
        }
    }
}


interface User {
    name: string,
    email: string,
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAcc(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}



function logValue(x : Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
        
    }
    else{
        console.log(x.toUpperCase());
        
    }
}



type Fish = {swim: () => void}
type Bird = {fly: () => void}

// function isFish(pet: Fish | Bird){
//     return (pet as Fish).swim !== undefined
// }  
// // return T/F not type
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}
// good one, confirms type

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}



interface circle {
    kind : "circle",
    radius: number,
}
interface square {
    kind : "square",
    side: number,
}
interface rectangle {
    kind : "rectangle",
    length: number,
    width: number
}

type Shape = circle | square | rectangle
function getTrueShape(shape : Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius * shape.radius
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius * shape.radius
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width 
            
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}