//reduce()--> callback func
const myNums = [1,2,3]
const Total = myNums.reduce(function (accumulator , initialval) {
    console.log(`acc:${accumulator} and inia: ${initialval}`) 
    return accumulator + initialval;
} , 0)
console.log(Total) //basic form of reduce( )

const Nums = [4,5,6]
const myTotal = Nums.reduce( (accumulator,initialval) => accumulator+initialval , 0 )
console.log(myTotal) //smart method

const shoppingCart = [
    {
        itemName : "py Course",
        price : 5999
    },
    {
        itemName : "Mobile Course",
        price : 8999
    },
    {
        itemName : "data Science Course",
        price : 12999
    },
]
const PriceToday = shoppingCart.reduce( (acc,item) => acc+item.price ,0)
console.log(PriceToday)