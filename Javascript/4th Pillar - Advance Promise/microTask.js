function exe(){
  return new Promise(function microtask(resolve, reject){
    console.log("resolving promise");
    resolve("Done");
  }
);
}
setTimeout(function process(){
  console.log("Timer Completed");   // Choise 1 (Callback queue)
}, 0)

let p = exe();
// If Any point of time the event loop has a choise from micro task queue or callback queue the microtask queue is given preference 
p.then(
  function fullfill1(value){console.log("resolve handler1", value);},   // Choise 2 (Micro task queue)
  function rejection1(value){console.log("resolve handler1", value);}
);

console.log("Ending");
