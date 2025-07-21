//++++++++++++++++dates+++++++++++++++++//
//date is an obj
//1
let myDate = new Date();
console.log(myDate)
console.log(myDate.toLocaleString())
console.log(myDate.toString())
console.log(typeof myDate)

//2
const hundreds = new Date(Date.UTC(2025,20,5,12,90,56));
console.log(hundreds.toLocaleString('ko-KR' , {timeZone:'UTC'}))

//3

let mycreatedDate = new Date(2025 , 6, 21);
console.log(mycreatedDate.toDateString());
