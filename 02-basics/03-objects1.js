//singleton 
//object .create

// 1- Object Literals: (most common)

const mysym = Symbol("key1"); //useof symbol
let user = {
      name : "Alice",
      "full name" : "Alice choudhary",
      age : 21,
      email : "coder@gmail.com",
      [mysym] : "mykey1", //for representing symbol : use []
      LoggedIn : false
     
}
//there are few cases in which we use this type of console
// console.log(user["full name"])
// console.log(user["name"])
// console.log(user.age);
// console.log(user.mysym)
// console.log(typeof  user.mysym)
// console.log(user[mysym])

//for changing & locking obj value:
user.email ="codermicrosoft@gmail.com"
//console.log(user.email)

//Object.freeze(user);
user.email = "codergoogle.com"
//console.log(user);


//creating function with obj

user.greeting = function (){
      console.log("Hello JS User")

}
user.greetingtwo = function (){
      console.log(`Hello JS User , ${this.name}`)

}
console.log(user.greeting()) //[Function (anonymous)]
console.log(user.greetingtwo())




 