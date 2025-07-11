function fetchData(arr){
let idx = 0;
function nextData(){
  if(arr[idx] == arr.lenth){
    return {value : undefined, done : true};
  }
  const Nextelemnet = arr[idx];
  idx++;
  return {value : Nextelemnet, done : false};
}
return {nextData};
}

const automatic = fetchData([1,10,22,35,8,99]);
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());
console.log(automatic.nextData());