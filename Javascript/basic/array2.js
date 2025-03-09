let arr = [1,0,1,0,0,1,0,1,1,0,0];
let arr1 = [];
let arr2 = [];
for(i = 0; i < arr.length; i++){
  let count = arr[i];
  if(arr[i] == 0){
    arr1.push(count);
  }
  else{
    arr2.push(count);
  }
}
arr = [arr1+","+arr2];
console.log(arr);


//  For-of loop 

let arr3 = [1,2,32,6,5,4,2];
for(const val of arr3) {
  console.log(val);
}

let str = "LUCKY";
for(const char of str){
  console.log(char);
}