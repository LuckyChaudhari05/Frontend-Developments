/*  Generatore Function    Syntax: function*
    The execution of Generatore function doesn't start after calling  
*/ 
function* fetchNext(){   //generatore funtion   
  console.log("Start");
  console.log("1st");
  yield 1;
  yield 2;
  console.log("Meddle");
  yield 3; 
  // return 10;
  yield 4;
  console.log("Done");
}         
const iter = fetchNext(); 
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
//This is the normal function which start execution after calling 
                      
                      
                      // function process(){
                      //   console.log("Started the exeuction");
                      //   const val = "Done";
                      //   setTimeout(() => {
                      //     console.log("Status: ", val);       
                      //   }, 5000);
                      //   // return val; 
                      // }
                      // let iter = process();