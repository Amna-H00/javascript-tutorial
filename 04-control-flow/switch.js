//switch : it will executes code until certain condition reaches and break : breakes control flow

const month = 6;
switch (month) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("march");
    
  case 4:
    console.log("april");
    break;
    default :
    console.log('default approached') //default runs when no case matches   


}
//grouping case:
const  fruit = "apple" ;
switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log("Fruit in stock");
    break;
  default:
    console.log("Unknown fruit");
}

//summary example of switch 
const condition = "approvedd";
switch (condition) {
case "pending":
    console.log("Still Pending .....");
    break;
case "approved":
    console.log("Approved!");
    break;
case "rejected":
    console.log("Rejected.");
    break;
default:
    console.log("Unknown Status.");
    
}
