let test = "the text is created \& for the test porpose";
console.log(test);
let y = 3;
console.log(y *= 4);
if(y >= 10){
console.log("the number", y, "is greater then 10");
}
else{
  console.log("the numbr is less then 10");
}

let p = 1;
let q = -0;
console.log(p && q);

let v = 7;
if( v%2 == 0 ) {
console.log("The given no is even");
}
else{
  console.log("The given no is odd");
}

let a = 10;
let b = 1;
let c = 9;

if(a<b && a<c){
  console.log(a);
}
else if( b<a && b<c){
  console.log(b);
}
else{
  console.log(c);
}

if(a+b>c && a+c>b && b+c>a){
  console.log("Triangle can be formed");
}
else {
  console.log("Triangle can't be formed");
}
