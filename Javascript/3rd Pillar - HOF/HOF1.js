function square(rel){
  return rel * rel;
}

function cube(x){
  return x*x*x;
}

function EvenOdd(y) {
  if( y % 2 == 0){
    return "The number is Even";
  }
  else {
    return "The number is Odd"
  }
}

const arr = [1,2,3,4,5,6];
const result = arr.map(square);     // map is the HOF and the square function is passed as an argument
console.log(result);

const cuberesult = arr.map(cube);
console.log(cuberesult);
console.log(arr);

const evenodd = arr.map(EvenOdd);
console.log(evenodd);