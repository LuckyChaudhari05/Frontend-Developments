console.log("Before");

setTimeout(() => {
  console.log("5's");   // this Happen because the setTimeout is not js property it's Runtime function
}, 5000);

// for(let i = 0 ; i<= 10000000000;i++){
//   // in same case for (For loop) the console.log will wait, because for loop is js property 
// }

console.log("After");