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
console.log(Object.assign({},O,o))
console.log(Object.getOwnPropertySymbols(O));//Copying symbol-typed properties

const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("liber");
console.log(Object.assign({} , v1 , null , v2 , undefined, v3 , v4)) //Primitives will be wrapped to objects


//2- Object Entries:
const object = {
    a : "some str",
    b : 45,
    gender : "female"
}
console.log(Object.keys(object));
console.log(Object.entries(object));

//3- Object.fromentries():

const map = new Map([
    ["liber" , "bar"],
    ["baz",42]
]);
console.log(Object.fromEntries(map))//Converting a Map to an Object

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
console.log(Object.fromEntries(arr)); //Converting an Array to an Object

const regularuser = {
    email : "gona@gmai.com",
    fullname: {
        userfullname : {
            fisrtname : "alira",
            lastname : "alyana"
        }
    }
}
console.log(regularuser.fullname.userfullname.fisrtname);//object wraped in obj


const objectu = {...obj1 , ...anothersource};
console.log(objectu) //spread operator for combining values
 
console.log(regularuser.hasOwnProperty('fullname'));

console.log()