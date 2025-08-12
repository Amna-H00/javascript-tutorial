//ForEach() Loop :

const programming = ["js" , "rb" , "py" , "thon"]

//programming.forEach(function (val) {
   // console.log(val)
//})

programming.forEach((item) => {
    console.log(item)
}) //for arrow func

function printMe(item) {
    console.log(item)
}
programming.forEach(printMe)//callback func

programming.forEach((item,index,arr) =>{
    console.log(item,index,arr)
})//foreach loop also hve parameter like item,index,arr


const myCoding = [
    {
        languageName: "Python",
        languageFileName : "javascript"
    },
    {
        languageName: "java",
        languageFileName : "javascript"
    },
    {
        languageName: "Ruby",
        languageFileName : "RB"
    }
   
] //iteration on array inside object 

myCoding.forEach((item) => {
    console.log(item.languageName)
})//calling arr of obj


