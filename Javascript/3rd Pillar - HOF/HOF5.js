const arr = [1,2,3,4,5,6,7,8,9];
function sum(prev , current) {
  console.log(prev, current);
  return prev + current;
}

const result = arr.reduce(sum);
console.log(`Sum of all the elements is : ${result}`);