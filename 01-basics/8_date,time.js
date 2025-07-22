//++++++++++++++++dates+++++++++++++++++//
//date is an obj
//several ways of  creating Date obj:
//       current date and time : new Date()
//       From milliseconds since Unix epoch: new Date(1609459200000)
//       From a date string: new Date("2025-07-22")
//       From components: new Date(2025, 6, 22, 10, 40, 0)
//+++++   note:  Months are zero-indexed (0 = January, 11 = December) ✅🚫🚫🚫
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

// let mycreatedDate = new Date(2025 , 7, 21);
// console.log(mycreatedDate.toDateString());
 let mycreatedDate = new Date(2025 , 0 , 21 , 5 ,3);
console.log(mycreatedDate.toLocaleString());
//4
 let mycreated = new Date("2023-01-14");
 console.log(mycreated.toLocaleString())
 //5
  let myTimeStamp= new Date();
//   console.log(myTimeStamp)
//   console.log(mycreated.getTime())

// console.log(Date.now()/1000) //gives value in decimal

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
//getting date components

//  getFullYear() – Year (e.g., 2025)

//  getMonth() – Month (0–11)

//  getDate() – Day of the month (1–31)

//  getDay() – Day of the week (0–6; Sunday is 0)

//  getHours() – Hours (0–23)

// getMinutes() – Minutes (0–59)

// getSeconds() – Seconds (0–59)

// getMilliseconds() – Milliseconds (0–999)

// getTime() – Milliseconds since January 1, 1970

// getTimezoneOffset() – Difference from UTC in minute

