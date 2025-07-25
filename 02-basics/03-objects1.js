//singleton 
//object .create

// 1- Object Literals: (most common)

const mysym = Symbol("key1"); //useof symbol
let user = {
      name : "Alice",
      "full name" : "Alice choudhary",
      age : 21,
      email : "coder@gmail.com",
      [mysym] : "mykey1",
      LoggedIn : false
     
}
console.log(user["full name"])
console.log(user["name"])
console.log(user.age);
console.log(user.mysym)
console.log(typeof  user.mysym)
console.log(user[mysym])

//for changing & locking obj value:
user.email ="codermicrosoft@gmail.com"
console.log(user.email)

Object.freeze(user);
user.email = "codergoogle.com"
console.log(user)


 