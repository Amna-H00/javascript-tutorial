// 3 Scopes 
//var = Globally scoped
//let,var,const = Function scoped
//let , const = Block scoped
//nested scope : which contains when a scope is declared inside another. function inside function

function one (){
    const username = "Aliana";
    function two(){
        const website = "W3.SCH#10"
        console.log(username)
    }
    //console.log(website);
    two()
}
one(); //nested func

//+++++++++++++++++++++++++Interesting +++++++++++++++++++++++++++//

function addone(num){
    return num + 1
}
addone(5);//type 1 to declare function

const addtwo = function (num) {
    return num + 2
}
addtwo();//type 2 to declare

