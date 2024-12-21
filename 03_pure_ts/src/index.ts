// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }


class User{

  // private _courseCount = 1
  protected _courseCount = 1

  readonly city : string = "Jaipur"
  constructor(
    public email : string,
    public name : string,
    // private userId: string,
  ){
  }

  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number{
    return this._courseCount
  }

  set courseCount(num) {
    if(num <= 1){
      throw new Error("Not valid")
    }
    else{
      this._courseCount = num
    }
  }

  private deleteToken(){
    console.log("Token deleted");
    
  }

}



class subUser extends User {
  isFamily : boolean = true
  changeCourseCount(){
    this._courseCount = 4 // -> ❌ private
  }
}




const hitesh = new User("hc@h.com", "hc");
// hitesh.city = "Jaipur"
// hitesh.deleteToken() // -> ❌


