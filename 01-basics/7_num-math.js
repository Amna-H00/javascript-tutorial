//++++++++numbers+++++++//
// number is a primitive data type that represents all numeric values—not split into separate types like int, float, or double

const number = new Number(100);
console.log(number)
//tofixed
console.log(number.toString().length)
console.log(number.toFixed(2));
//toprecision
const otherNumber = 23.7889;
console.log(otherNumber.toPrecision(3))
//toLocaleString
const hundreds = new Date(Date.UTC(2025,20,5,12,90,56));
console.log(hundreds.toLocaleString('ko-KR' , {timeZone:'UTC'}))

const h = 100000;
console.log(h.toLocaleString('en-IN'))


// +++++++++++Math++++++++ //
//useful for maths operations ✅
//The Math object is not a constructor—you don’t do new Math()

//▪ Common constants:
//  Math.PI (~3.14159)
//  Math.E (Euler's number, ~2.71828)
//  Math.SQRT2 (~1.4142), Math.LN10, Math.LOG2E, etc.

//▪ Typical methods:
//     Method                   What it does  
Math.round(x)	                //Nearest integer
Math.floor(x) / Math.ceil(x)    //Round down or up
Math.trunc(x)                   //Removes fractional part 
Math.abs(x)                     //Absolute value
//Math.min(a, b, ...) / Math.max(...)	  //Find minimum or maximum
Math.pow(a, b) , a ** b            //Exponentiation
Math.sqrt(x)                       //Square root
Math.random()	                   //Random number    between 0 (inclusive) and 1 (exclusive

//trig functions ✅
Math.sin(x), Math.cos(x), Math.tan(x) //etc. – all angles in radians
//log functions✅
Math.log(x) //(natural log),
 Math.log10(x), Math.log2(x)

                  