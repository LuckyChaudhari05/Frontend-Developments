
function gun(x , fun){
  for(let i = 1; i<= x; i++){     // fun function is the callback function as it is been used by other function.
    console.log(i);
  }
  fun();
}

gun(10, function exer(){
  console.log("This function is the callback function ");
})