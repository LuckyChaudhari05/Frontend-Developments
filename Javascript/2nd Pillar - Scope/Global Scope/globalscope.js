console.log(lucky);
var lucky = "HI";    // if you use let the above console.log won't work 
function name() {
  console.log(`In side the function : ${lucky}`);
}
console.log(lucky);
name(lucky);