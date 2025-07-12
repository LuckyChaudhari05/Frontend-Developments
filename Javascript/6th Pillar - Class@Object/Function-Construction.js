  function product(n,p,r, d){
    this.name = n;
    this.price = p;
    this.rating = r;
    this.discreption = d;
    this.display = function () {
      console.log(this);
    };
  }
 

//  New keyword create the new empty object 
const p = new product("Onepluse", 50000 ,4.9,"This is the new onepluse node 3");
p.display();