//object specific loop :
// forin loop

const myObject = {
    js : 'javscript',
    cpp: 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}