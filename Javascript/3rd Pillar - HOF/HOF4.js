function OddEven(x) {
  return x % 2 ==0;     // This functio checks that arr value is even or not. So it will only return the ture value.
}
let arr = [1,2,3,4,,5,6,7,8,9];
const result = arr.filter(OddEven);
console.log(result); 

//  The filter is also an HOF but it only returns the booluen value's