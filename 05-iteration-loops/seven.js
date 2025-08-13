//map() --> callback func

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (num) => {return num + 10})
console.log(newNums) //basic of map()

const nums = [1,2,3]
const newNums1 = nums
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter((num) => num >= 20) 
console.log(newNums1) //use of multiple func


 