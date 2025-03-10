let obj = {
  x:10,
  valueOf(){
    return "99";
  }
}
console.log(typeof obj.valueOf());
console.log(100 - obj);

let obj2 = {}
console.log("10" + obj2);

let y = 0; // As 0 is false value it returns the true.
console.log(!y);

if(y){
  console.log("Its the true value");
}
else{
  console.log("Its the false value");
}