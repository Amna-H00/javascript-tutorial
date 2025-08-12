//filter map and reduce

const coding = ["js" , "ruby" , "java" , "cpp" , "python"] 

const values = coding.forEach((item) => {
console.log(item)
})
console.log(values); //but it will not return values , gives undefined

// so we will use another methods
const myNums = [1,2,3,4,5,6,7,8,9]
const newNums = myNums.filter((num) => num > 4);
console.log(newNums);//this returns val

const nums = [1,2,3,4,5,6,7]
const mynewNums = nums.filter((num) => {
   return num > 4;
})
console.log(mynewNums) //filter with arrow func and braces

 //More on Filter()

 const books = [
    {title: "Book One" , genre : 'Fiction' , publish:'1981' , edition : 2004},
    {title: "Book Two" , genre : 'Non-fiction' , publish:'1689' , edition : 2008},
    {title: "Book Three" , genre : 'History' , publish:'1995' , edition : 2009},
    {title: "Book Four" , genre : 'Non-Fiction' , publish:'1999' , edition : 1878},
    {title: "Book Five" , genre : 'Science' , publish:'1990' , edition : 2003},
    {title: "Book Six" , genre : 'Grammer' , publish:'1989' , edition : 2000},
    {title: "Book Seven" , genre : 'History' , publish:'1986' , edition : 2006},
    {title: "Book Eight" , genre : 'Glamour' , publish:'1998' , edition : 2001},
 ]
 let userBooks = books.filter((bk) => bk.genre === 'History')
 userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
 })

 console.log(userBooks);
  