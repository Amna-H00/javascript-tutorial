//Arrays specific loop :
//forof loop :
//for arr
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
//for string:
const greetings = "Hello World";
for (const greet of greetings) {
   //console.log(`Each char is ${greet}`) 
}


//Maps (is an obj)

const map = new Map()
map.set('In' , "Pakistan")
map.set('USA' , "United State America")
map.set('FR' , "France")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value)
} //use of map in forof loop

//use of forof loop for obj
const myObject = {
    game1 : 'Spiderman',
    game2 : 'Policeman'
}
for (const [key,value] of myObject) {
    console.log(key , ':-' , value)
}//obj cant be iterable in forof loop like this