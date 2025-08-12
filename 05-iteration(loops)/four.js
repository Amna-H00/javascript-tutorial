//object specific loop :
// forin loop

const myObject = {
    js : 'javscript',
    cpp: 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js" , "rb" , "py" , "thon"]
for (const key in programming) {
   //console.log(key);// this key will only prints array numbers 01,2,3
   console.log(programming[key]) // it will actually gives all keys of arr

} //forin loop for array

//map() also cant iterate by forin loop