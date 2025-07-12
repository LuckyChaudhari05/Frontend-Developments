class product {
  #name;  // {Private} Hideing the name property from End user
  // price;
  // rating;
  // discreption;
  constructor(n,p,r, d){
    this.#name = n;
    this.price = p;
    this.rating = r;
    this.discreption = d;
  }

  setName(n) {
    if (typeof(n) != 'string')
    {
      console.log("Invalid Input");
      return;
    }
    this.#name = n;
  }
  display(){
    // display product
    console.log(this.#name, this.price, this.rating, this.discreption);
  }

}
const p = new product("Onepluse", 50000 ,4.9,"This is the new onepluse node 3");

p.setName("Iphone");
console.log(p);
p.display();
