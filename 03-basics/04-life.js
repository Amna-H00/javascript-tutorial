//Imediately invoked Function (IIFE) : to avoid from global scope pollution use IIFE () () like this
//1-
(function chai() {
    console.log(`DB IS CONNECTED`)
})(); //we use ; in IIFE sometime to Execute func . named iIFE
//2-
(function chai() {
    console.log(`DB IS CONNECTED TWO`)
})(); //IIFE

//3 
(  () => {
    console.log(`DB IS CONNECTED THREE`)
})(); //replacing func with arrow func

//4 
(  (name) => {
    console.log(`DB IS CONNECTED 4 ${name}`)
})('OLIvia'); 

//++++++++++++++++++++++++++important+++++++++++++++++
//for writing 2 or more IIFE use semicolon at the end