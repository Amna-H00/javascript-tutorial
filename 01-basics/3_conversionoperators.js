//conversions
//1-conversion numbers
let score = "32abc";
console.log(typeof score) //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // now it will be number  

console.log(valueInNumber) //now it will be NaN
//this collectively called conversion. 

//conclusion:
//"33" = 33
//"33abc" = NaN
//true = 1 
//undefined = NaN 
//null or false = +0

//2. conversion boolean
let isLoggedIn = "kli"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //output:true

//conclusion:
//1 => true , 0 => false
//false for : null , +0 ,-0 , NaN , ""
//true for : everything else

//3.conversion string

let aNumber = 45;
let stringNumber = String (aNumber)
console.log(stringNumber)//output :45
console.log(typeof stringNumber)//output:string