function timecosuming(){
  console.log("Loop Start");
for(let i = 0 ; i<= 10000000000;i++){
  // some task
}
console.log("Loop Ends");
}

function timecosumingByRuntime0(){                                              
  console.log("Timer Started0");
setTimeout(() => {
  console.log("Completed the Timer0");
  for(let i = 0 ; i<= 10000000000;i++){
    // some task
  }
}, 5000);                                     // this timer is of 5 sec so it will execute at last 
}

function timecosumingByRuntime1(){
  console.log("Timer Started1");
setTimeout(() => {                               
  console.log("Completed the Timer1");
}, 0);                                        // This time is of 0 sec so it will execute first
}

function timecosumingByRuntime2(){
  console.log("Timer Started2");
setTimeout(() => {
  console.log("Completed the Timer2");
}, 200);                                      // this timer is of 0.2sec so it will execute second
}

console.log("HI");
timecosuming();
timecosumingByRuntime0();
timecosumingByRuntime1();
timecosumingByRuntime2();
timecosuming();
console.log("BY");

/* OutPut :- 
  HI
  Loop Start
  Loop Ends
  Timer Started0
  Timer Started1
  Timer Started2
  Loop Start
  Loop Ends
  BY
  Completed the Timer1
  Completed the Timer2
  Completed the Timer0 */