// HOF -> Higher Oder Function --> The function which use another function as argument

function f(x , fun){
  console.log(x);
  fun();
}

f(10 , function n(){
  console.log("HI! This is the function passed as an argument");
});