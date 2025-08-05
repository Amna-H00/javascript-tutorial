//controlFlow contains:sequential (operators) conditionals (if,else,if-else,switch case) , loops (for , while,do-while) , jump statements (break,continue , return ,goto) , function call , try/catch , throw , error,callbacks 


 
//OPERATORS:
//< , >, <= , >= , == , ===(strict equal to chcks datatype), != , &&  , || 

const isUserLoggedIn = true;
const temperature = 41;
if (temperature < 50 ) {
    console.log("less than 50")
}else{
    console.log("False condition")
}

const score = 200;
if (score > 100) {
    const power = " fly" 
    console.log(`User power : ${power}`)
} //basics if,else

const userLoggedIn = true ;
const debitcard = true;
const LoggedInFromGoogle = true;
const LoggedInFromEmail = true;

if (userLoggedIn && debitcard && 2==2) {
    console.log("Allow to buy course")
}
 
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("User Logged In")
} //some operators use
