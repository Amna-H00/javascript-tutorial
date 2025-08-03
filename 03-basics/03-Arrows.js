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