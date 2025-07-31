//Functions 

function sayMyName() {
    console.log( 'A' );
    console.log( 'm' );
    console.log( 'n' );
    console.log( 'o' );
    console.log( 'o' );
}
sayMyName();  // General Form of functions

function addNumbers(number1 , number2) { //(number1 , number2) are called parameterd
    // let result = number1 + number2
    // return result;
    return number1 + number2
}
const result = addNumbers(4,5);
console.log(result);  //adding 2 numbers in function and (2,4) called arguments

//another type to write function and passing arguments
function LoginUserMessage(username = "zoam") {
    return `${username} just logged in`
}
console.log(LoginUserMessage());

//type 3 to write function:
function LoginUserMessage(username = "zoam") {
    if (!username) {
        console.log("please enter valid username")
        return;
    }
    return `${username} just logged in`
    
}
//console.log(LoginUserMessage());

//type 4 function for list of prices
function calculateCartPrice(...num1) { //rest operator
    return num1;
}
console.log(calculateCartPrice(200,300,400))


function calculateCartPrice(val1,val2,...num1) {
    return num1;
}
//console.log(calculateCartPrice(200,300,400,2000,600))

//type 5 functions in objects:
const user = {
    username : "vakom",
    price : 200
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"vanum",
    price : 300
})//we can also use direct obj

//type 6 arrays in function:
const myNewArray = [200,400,5600,900]
function returnArray(getArray) {
    return getArray[0]
}
console.log(returnArray(myNewArray));


