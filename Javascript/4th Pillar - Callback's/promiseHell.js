// let arr2  = [1,2,10,100,13,17,65,3,6,9,80,0];
// arr2.sort(function( a , b ){
//   return a - b;
// });

function doTask(fun , x){
  fun(x*x);
}

doTask(function demo(num){
  console.log("This is the number : ", num);
}, 9);