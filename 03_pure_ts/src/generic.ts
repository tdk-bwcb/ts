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