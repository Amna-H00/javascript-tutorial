//Object Destructuring : allows you to extract properties from an obj

const worker = {
    HerSelf : "Alice",
    age : 35,
    city : "New York",
    eligibility : "100% Authentic"
}
const {HerSelf , eligibility} = worker;
console.log(HerSelf);
console.log(eligibility) //General Example of Destructuring


const Person = {
    HerSelf : "Alice",
    age : 35,
    city : "New York",
    eligibility : "100% Authentic"
}
const {HerSelf:fullname} = Person;
console.log(fullname); //Renaming Variables


const Person1 = {
    name : "Alice"
}
const { name , city = "Pakistan" } = Person1;
console.log(city) //setting default values if property doesnot exists

const Person2 = {
    HerSelf : "Alice",
    age : 35,
    address : {
    city : "New York",
    zip : "1001"
}
}
const {address : { zip } } = Person2; 
console.log(zip) //Nested Destructuring

function details({name , age}) {
    console.log(`Hello , ${name}. You are ${age} years Old`)
}
details({name : "zoam" , age : "23"}); //function Parameter ! Destructuring is commonly used in function parameters.