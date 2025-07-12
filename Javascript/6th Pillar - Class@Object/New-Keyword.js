class product {
  // name;
  // price;
  // rating;
  // discreption;
  constructor(n,p,r, d){
    this.name = n;
    this.price = p;
    this.rating = r;
    this.discreption = d;
  }
  display(){
    // display product
  }
}
//  New keyword create the new empty object 
const p = new product("Onepluse", 50000 ,4.9,"This is the new onepluse node 3");
console.log(p);