const name = "Mahrosh"

const repo = 50;
// console.log(name + repo + "value") //this is old way of concat dont use 🚫🚫

console.log(`Hello myself ${name} and my repo is ${repo}`) // modern way to concat




//+++++++++++++++++++++declaring string//

let gamename = new String ('Mahrosh')

console.log(gamename[0]); //keyvalue
console.log(gamename.__proto__); //proto syntax


// console.log(gamename.length);
// console.log(gamename.toLocaleUpperCase()); 
// console.log(gamename.charAt(4)); //for knowing character on some position
// console.log(gamename.indexOf('o')); //for knowing position of certain char

 console.log(gamename.substring(0,4)) // includes words from 0 to 3 , cant use negative val

console.log(gamename.slice(-7, 3)); //can use -ve values


const newStr = "    klios"
console.log(newStr)
console.log(newStr.trim()) //will ignore extra spaces   


const url = " Mharosh%20@gmail.com"

console.log(url.replace('%20' , '-))//replaces with someother word 
console.log(url.includes('su'))
console.log(url.includes('sunam'))




 

 