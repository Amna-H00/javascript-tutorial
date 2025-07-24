const marvelhero = ["abul","santu","shakti","niraj"]
const dchero = ['mahtarj' , 'bangu','banglu']
// marvelhero.push(dchero)
// console.log(marvelhero)

//marvelhero.concat(dchero)
//console.log(marvelhero)

// const allnewheros = [...marvelhero, ...dchero]
// console.log(allnewheros) //spread operator


const anotherArray = [1,2,3 , [4,5,6],[7,8,9 , [10,11]]]
const realarray = anotherArray.flat();  
console.log(realarray);