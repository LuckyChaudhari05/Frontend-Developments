function retuner(){
  let i = 1;
  function innerProcces(){
    i += 1;
    return i;
  }
  console.log(i);
return innerProcces;
};

let x = retuner(); // x is calling function retuner which is returning another function
console.log("First",x());
console.log("Second",x());   // Closures just remember the value the verable is accesing 
console.log("Third",x());
retuner();
// x();