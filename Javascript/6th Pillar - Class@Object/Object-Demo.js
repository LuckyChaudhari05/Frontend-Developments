let Iphone = {
  name : "Iphone 13",
  price : 100000,
  rating : 4.5,
  dis : "This is the new iphone 13",

  display () {
    console.log("First Product : ",this);
  }
}
let Onepluse = {
  name : "Onepluse Node 2",
  price : 50000,
  rating : 4.9,
  dis : "This is the new Onepluse Node 2",

  display () {
    console.log("Second Product : ",this);
  }
}
Iphone.display();
// console.log(Iphone, Onepluse);

