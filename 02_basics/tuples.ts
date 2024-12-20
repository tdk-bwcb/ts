const user: string[] = ["hc"]
const user1: (string | number)[] = [1, "jw", 65, "345"]

let tuser : [string, number, boolean]
tuser = ["idbkldf", 2432, true]
// order matters


let rgb : [number, number, number] = [12,345,687]


type user = [number, string]
const newUser : user = [2143, "dgfiu"]
newUser[1] = "oifdgi" // override ✅
// newUser.push(true) // -> ❌






export{}