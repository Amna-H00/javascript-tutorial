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
console.log(LoginUserMessage());

