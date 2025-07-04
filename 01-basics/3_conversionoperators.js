//conversions

let score = "32abc";
console.log(typeof score) //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // now it will be number  

console.log(valueInNumber) //now it will be NaN
//this collectively called conversion. 

//conclusion:
//"33" = 33
//"33abc" = NaN
//true = 1 , false = 0

let isLoggedIn = "kli"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //output:true

//conclusion:
//1 => true , 0 => false
//"" => false
//"kli" => true