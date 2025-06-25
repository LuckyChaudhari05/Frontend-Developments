let arr = [1,2,3,4,5,6,7,8,9,10,1,1,2,5,5,5,9,4];
// let arr1 = arr.sort();
// console.log(typeof(arr1));
// console.log(arr1);
let a = 1;
let count = 0;
    // for(let i = 0 ; i <= arr.length ; i++){
    //   if(arr[i] == 9) {
    //     console.log("yes");
    //     break;
    //   }
    //   // else{
    //   //   console.log("no") }
    // }


for(let i = 0 ; i <= arr.length ; i++){
  if(arr[i] == a) {
    count += a;
  }
}
console.log(count);