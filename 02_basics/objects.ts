// const User = {
//     name : 'hitesh',
//     email : "hitesh@ge.com",
//     isActive : true
// }

// function createUser({name: string, isPaid: boolean}){

// }

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// createUser(newUser) // -> ✅, can pass more than req.
// // createUser({name: "hitesh", isPaid: false, email: "h@h.com"}) // -> ❌


// function createCourse() : {name: string, price: number}{
//     return {name:"prince", price: 399}
// }





// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: false}
// }

// type MyString = string

// createUser({name: "", email: "", isActive: false}){
//     return {name: "1", email: "1", isActive: false}
// }






type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    cardDetails?: number; // -> optional
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: true,
    
}


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardDate & cardNumber & {
    cvv: number
}


myUser.email = "k@h.com"
// myUser._id = "2836" // -> ❌


export{}














