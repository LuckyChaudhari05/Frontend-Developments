// let a = ["lucky", "yash", "sachin", "rohit", "durgesh"];
// let b = [1,2,3,"test", null, undefined,true,false];
// let c = [1,2,3,4,5,6,7,8,9];
// console.log(a[2]);
// console.log(b[2]);
// console.log(c[2]);


let arr = ["a","n","d","a"];
let lucky = [];
let numb = 0;

for(j = arr.length-1; j>=0;  j--){
  let val = arr[j];
  lucky.push(val);
}

console.log(lucky);
console.log(arr);

for(i = 0; i<arr.length ;i++){
  if(arr[i] == lucky[i]){
     numb = "The no is the pala";
  }
  else{
     numb = "The is not a pala";    
    break;
  }
}
console.log(numb);





