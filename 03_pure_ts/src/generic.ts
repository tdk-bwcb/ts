const score : Array<number> = []
const names : Array<string> = []

function identityOne(val : boolean | number) : boolean | number {
    return val
}

function identityTwo(val : any): any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}// rerurn same value type


function identityFour<T>(val : T): T {
    return val
}

interface bottle{
    brand: string,
    type: number,

}

identityFour<bottle>({brand:"sufd", type:345})

function getSearchProducts<T>(products: T[]): T{
    return products[3]
}
// input : array of T, return : one T


const getMoreSearchProducts = <T>(products: T[]): T => {
    // ......
    const myIndex = 4
    return products[myIndex]
}



interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object{
    return{
        valOne, 
        valTwo
    }
}
// anotherFunction(3, "4")
anotherFunction(344, {connection:"sdf", username: "erd", password: "erdh"})




interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string,
    aubject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}

