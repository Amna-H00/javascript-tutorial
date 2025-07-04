console.log("Mahrosh Kli")
//concept of let ,const and var
//let --> is block scoped , can be reassigned , cant redeclared

//i.e.
// let — Redeclaration not Allowed
//  let age = 25;
//  let age = 30;
// ❌ SyntaxError: Identifier 'age' has already been declared

//i.e. 
// let — Reassignment Allowed
// let y = 5;
//  y = 15;          // ✅ Allowed
//console.log(y);  // 15

//const --> block scoped , redeclaration not allowed , cant reassigned
//⚠️ const does not make objects/arrays immutable (unchanged), only the binding is constant. i.e. 
// const arr = [1, 2];
// arr.push(3);  // ✅ Allowed
// arr = [4, 5]; // ❌ Error

//Redeclaring in const is allowed in new block scopes
//   const x = 1;
// {
//   const x = 2;  // ✅ Allowed — this 'x' is inside a     inner block
//   console.log(x); // 2
// }

// console.log(x); // 1

//var --> global scoped , redeclared , reassigned 
const accountId = 145678;
let accountEmail = "amnaenterpenure@gmail.com";
var accountPassword = "millionare100";

accountCity = "Sargodha"

accountEmail = "ahdev@gmail.com"
accountCity = "lahore"
accountPassword = "cato"
let accountstandard; //it will be undefined 

console.table([accountCity,accountEmail,accountId,accountPassword , accountstandard]);
 /*
prefer not to use var 
because of issue in block scope and functional scope
 */
