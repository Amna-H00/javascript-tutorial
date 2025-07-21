//++++++++++++++++dates+++++++++++++++++//
//date is an obj
const hundreds = new Date(Date.UTC(2025,20,5,12,90,56));
console.log(hundreds.toLocaleString('ko-KR' , {timeZone:'UTC'}))