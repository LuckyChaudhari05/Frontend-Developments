function exe(){
new Promise(function(resolve , reject){
  let num = Math.floor(Math.random() * 10);
if( num % 2 == 0){
  resolve(num);
  // console.log(num);
}
else {
  reject(num);
  // console.log(num);
}
});
}

let x= exe();
console.log(x); 