 const user = {
    username : "OLIvia",
    price : '1K',

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to Website`)
        console.log(this) //this prints all context
    }
 }
 user.welcomeMessage();
 user.username = "ALIana"; //context changed
 user.welcomeMessage()
 console.log(this) //in node 'this' gives empty output

 //but in windows it will be :
 //Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

 //this word  
 function chai(){
    
    console.log(this)
 }
 chai();
//another type
//  const chai = function(){
//     let username = "olivia"
//     console.log(this.username)
//  }
 const c2 =() => {
    let username = "olivia"
    console.log(this)
 }

 //Arrow function
 //1-
//  const addTwo = (num1 , num2) => {
//    return num1 + num2 
//  }

 //2-
 //const addTwo = (num1 , num2) => num1 + num2 

//3-
 const addTwo = (num1 , num2) => (num1 + num2 )
//console.log(addTwo(5,6));
 //4-
 const addTw = (num1 , num2) => ({username : "Aliana"})
console.log(addTw(5,6)); //undefined cz objects cant returned for returning we wrap it in () 
 





 