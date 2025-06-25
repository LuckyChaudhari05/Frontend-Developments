const newArray = [9, 2, 5, 8, 6];
function print(element , idx){
  return `Element on the index ${idx} is ${element}`;
}
const result2 = newArray.map(print);
console.log(result2);