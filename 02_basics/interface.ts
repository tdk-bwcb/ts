interface User1  {
    readonly dbId: number,
    email: string,
    userId: string,
    gogleId?: number,
    // startTrial: () => string
    startTrial(): string,
    getCupon(cuoponname : string, value : number): number
}
// type User = {
//     email: string,
//     userId: string
// }


// reopening of interface
interface User1 {
    githubToken?: string,
}

const hitesh: User1 = {
    dbId : 83,
    email :  "hi@h.com",
    userId : "woiuh",
    startTrial: () => {
        return "eug"
    },
    getCupon: (name : "hitesh", off : 10) => {
        return 10
    },
}
hitesh.email = "weoiug"



// inheritance
interface Admin extends User1 {
    role: "ta" | "admin" | "learner",

}

const hitesh1: Admin = {
    dbId : 83,
    email :  "hi@h.com",
    userId : "woiuh",
    startTrial: () => {
        return "eug"
    },
    getCupon: (name : "hitesh", off : 10) => {
        return 10
    },
    role: "ta"
}
hitesh.email = "weoiug"



export{}