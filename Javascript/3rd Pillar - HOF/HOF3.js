let arr  = [1,2,10,100,13,17,65,3,6,9,80,0];

arr.sort();
console.log(arr);
// Output :- 
// [
//    0, 1, 10, 100, 13,
//   17, 2,  3,   6, 65,
//   80, 9
// ]

let arr2  = [1,2,10,100,13,17,65,3,6,9,80,0];
arr2.sort(function( a , b ){
  return a - b;
});
console.log(arr2);