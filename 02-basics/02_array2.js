const marvelhero = ["abul","santu","shakti","niraj"]
const dchero = ['mahtarj' , 'bangu','banglu']
// marvelhero.push(dchero)
// console.log(marvelhero)

//marvelhero.concat(dchero)

//console.log(marvelhero)

const allnewheros = [...marvelhero, ...dchero]
console.log(allnewheros) //spread operator

const anotherArray = [1,2,3 , [4,5,6],[7,8,9 , [10,11]]]
 const realarray = anotherArray.flat(Infinity);  //flat() converts all arrays to str
 console.log(realarray);


// 1- Array.isArray(value)
// Returns true if the value is an array, else false.
console.log(Array.isArray([1,2,3])) //yes

//2 - Array.of(...items)
//Creates an array from the passed arguments. Avoids special-case behavior when passing a single number.
let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c))

//3 - Array.from(iterable[, mapFn, thisArg])
//Creates a new array from an iterable or array-like object and supports optional mapping.
console.log(Array.from("hitesh"))        //[ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"kli"}))      //interesting case for interviews
  