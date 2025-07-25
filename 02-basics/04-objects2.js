//singleton objects
 
//1 - Assign object: 

const source = {a:1 , b:2};
const anothersource = {c:"mahrosh" , d:"8"}
const returnedsource = Object.assign(source,anothersource);
console.log(returnedsource); //merging objects

console.log(Object.assign({},(source))) //cloning

const obj1 = {a:0,b:{c:0}};
const obj2 = Object.assign({} , obj1)
console.log(obj2) //deep cloning

const o1 = {a:1 , b:2 , c: 1};
const o2 = { b:7 , c: 2};
const o3 = {c:8 };
console.log(Object.assign({} ,o1,o2,o3)); //Merging objects with same properties


const o = {a:1};
const O = {[Symbol("foo")]:2};
console.log(Object.assign({},O,))
