function randomNumber(max){
   return Math.floor(Math.random() * max);
}

function exe(){
return new Promise(function(resolve , reject){
  console.log("Entering the callback");
  setTimeout(() => {
    let num = randomNumber(10);
    if( num % 2 == 0){
      resolve(num);
      // console.log(num);
    }
    else {
      reject(num);
      // console.log(num);
    }
  }, 5000);
  console.log("Exiting the callback");
});
}

console.log("Starting...");
let x= exe();
console.log("Wating for promise to complete"); 
console.log("Current promise look's like", x );

console.log("Going to register my 1st set of  handler's");
x.then(
  function fullfill1(value){
    console.log("Inside fulfill 1 with value",value)
    console.log(x);
  },
  function rejection1(value){
    console.log("Inside rejection 1 with value",value)
    console.log(x); 
  }
);

console.log("Going to register my 2nd set of handler's");
x.then(
  function fullfill2(value){
    console.log("Inside fulfill 2 with value",value)
    console.log(x);
  },
  function rejection2(value){
    console.log("Inside rejection 2 with value",value)
    console.log(x); 
  }
);

console.log("Ending...");