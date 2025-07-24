// ++++++++++++++++ Ways To Declare Arrays +++++++++++++//
//1 - Array literal : used square bracket 

let empty = [];
let nums = [10,45,9];
let mixed = ["helo" , 4 , true , {a:11}];
let matrix = [[1,3],[3,5]];
console.log(empty)
console.log(nums)
console.log(mixed)
console.log(matrix);

//2- Array constructor : 

const a = new Array();
const b = Array(3) //empty 
const c = new Array(1,2,4,5);
console.log(a)
console.log(b)
console.log(c)

//3 array.of() :
//  The difference between Array.of() and the Array() constructor is in the handling of single arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array 

console.log(Array.of(7));  // [7]
console.log(Array(7)) ;  // array of 7 empty slots

console.log(Array.of(1,2,34,4))

//4 Array.from() : creates iterable objects , creytes anew array syntax:  Array.from(items, mapFn, thisArg)

const arr1 = Array.from("hello"); //string array
const arr2 = Array.from(new Set([1,2,2,3,3,4,5])); //removes repeating  terms
const arr3 = Array.from({0:'a' , 1:'b' , length:2});
console.log(arr1)
console.log(arr2)
console.log(arr3)

console.log(Array.from([1, 2, 3], (x) => x + x)); //use of arrow function


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  Methods Of Array : 
//1- Mutators (which changes array)
//(a) - push(): adds to end , returns new length.
// const array = [1,2,3];
  const arr = array.push(4,5)
console.log(arr)
console.log(array);
//b  - pop() : removes last element
