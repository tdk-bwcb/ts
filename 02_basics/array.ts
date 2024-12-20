const superheros = []
// superheros.push("superman") // -> ❌ Argument of type '"superman"' is not assignable to parameter of type 'never'.

// const superheros1: string[] = []
const superheros1: Array<string> = []
superheros1.push("weusf") // -> ✅

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []

allUsers.push({name: "jik", isActive: true}) // -> ✅


const MLModels: number[][] = [
    [255, 255, 255],
    []
]
