// let i = 1;
let count = 0;
// while (i <= 10) {
//   console.log("Count", count += i);     // While loop
//   i++;
// }

//For loop 
for( i = 1 ; i <= 10 ; i++) {
  console.log(count += i);
}

console.log("New");

//forEach loop
let numbers = [10, 20, 30, 40];
numbers.forEach(function(num) {
    console.log(num + num);
});

//forEach loop with index
let furits = ["Apple", "Mango", "Orange", "Graps"];

furits.forEach((furit, index) => {
  console.log(index,":",furit);
});

console.log("Table");

function example(i) {
    for(j = 1 ;j <= 10; j++){
      console.log(i * j);
    }  
}

// for(i = 1; i <= 10; i++){
//   example(i);
//   console.log("<------ Next Table ------> ");
// }

