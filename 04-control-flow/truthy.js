 //a truthy value is any value that evaluates to true when used in a Boolean context
 
 const userEmail = " ";
 if (userEmail) {
    console.log("Got Ur Email")
 } else {
    console.log("dont Hve User Email")
 }

 //falsy values:
 //false , 0 , -0 , BigInt 0n , null , undefined , NaN , ""

 //truthy values:
//  "0" , 'false' , " " , [] , {} , function () {} 


if (userEmail.length === 0) {
    console.log("Array is Empty")
}