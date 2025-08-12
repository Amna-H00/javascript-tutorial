//Iteration (Loops )

//For Loop :

for (let k = 0; k <= 10; k++) {
  const element = k;
  if (element == 5) {
    //console.log(`element reached`)
  }
  //console.log(element)
}

//loop inside a loop:(nested loop)
for (let i = 0; i <= 10; i++) {
  //console.log(`Outer loop value ${i}`)
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and outer loop ${i}`)
    //console.log(i + '*' + j  + '=' + i*j); //prints table from 0-10
  }
} //inner loop prints till outer loop prints.

//Arrays ky Loops:
let myArray = ["flash", "batman", "superman"];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

//break and continue:
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    //console.log(`Detected 5`)
    break; //control flow stopped and doesnt execute more !
  }
  // console.log(`value of i is ${index}`)
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`value of i is ${index}`);
}
