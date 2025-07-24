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
const array = [1,2,3];
  // const arr = array.push(4,5)
// console.log(arr)
console.log(array);

//b  - pop() : removes last element
console.log(array.pop())
console.log(array)

//c - unshift() : adds element to start
//d - shift() : removes first elemnt 
//e - splice() : removes n items optionally and insert items 

let arr = ['a','b','c','d']
console.log(arr.splice(1,2,'x','y'))
console.log(arr)

//f - reverse() : reverses the element
console.log(arr.reverse())

//// sort() : sorts the array in place,(arranges elements)
let arra = [3,4,5,2,1]
console.log(arra.sort())



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//

//accessor and utility methods of array which dont change i.e.
//  concat() //--> combines array
//   slice() // --> gives a copy from start up to end (end not including)
//  join() : Concatenates array elements into a string, separated by the specified string (default is comma).
//   toString() : Converts the array to a string—same as join(',').
//   toLocaleString()--> localizes each element using each element’s own toLocaleString() method.
//    includes() //--> returns true if contains otherwise false
//    indexOf() //-> Returns the first index at which the value is found, or -1 if not found.
//    lastIndexOf() //--> Returns the last index at which the value appears, or -1.
//    flat() //

   let sli = [1,2,5,6]
   console.log(sli.slice(0,3));
   console.log(sli.join('_'));

   const hundreds = new Date(Date.UTC(2025,20,5,12,90,56));
console.log(hundreds.toLocaleString('ko-KR' , {timeZone:'UTC'}))

let mycreatedDate1 = new Date(2025 , 7, 21);
// console.log(mycreatedDate.toDateString());
 let mycreatedDate = new Date(2025 , 0 , 21 , 5 ,3);
console.log(mycreatedDate.toLocaleString());


iteration & Transformation
forEach(), map(), filter(), reduce(), reduceRight()




