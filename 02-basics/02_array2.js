const marvelhero = ["abul","santu","shakti","niraj"]
const dchero = ['mahtarj' , 'bangu','banglu']
// marvelhero.push(dchero)
// console.log(marvelhero)

//marvelhero.concat(dchero)
//console.log(marvelhero)

const allnewheros = [...marvelhero, ...dchero]
console.log(allnewheros) //spread operator


const anotherArray = [1,2,3,[2,3,4,[8,9,0]],[2,2],[3,4,5]]
const anotherarray = anotherArray.flat(infinity);  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(anotherarray)