//****summary**** */

//Primitive

//7 types : String , Number , Boolean , null(empty) , undefined , Symbol , BigInt(big values)
console.log(typeof null) //object
console.log(typeof undefined)
 let a = true ;
 console.log(typeof a) //boolean
 let b = 3
 console.log(typeof b)//number
 let c = 2345678989n;
 console.log(typeof c)//bigint
const id = Symbol('123')
console.log(typeof id); //symbol


//REference (Non -  permitive)

//Array , Objects , Functions

let arr = ["1" , "kli"]
console.log(typeof arr) //object

let myFunction = function () {
    console.log("Hello World")
} 
console.log(typeof myFunction) //function

