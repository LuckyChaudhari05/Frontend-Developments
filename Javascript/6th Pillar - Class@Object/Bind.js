const player  = {
  firstname : "Lucky",
  lastname : "Chaudhari",
  jursieNo : 99,
  bolling : false,
  getdatile : function () {
    console.log(this.firstname , this.lastname ,"Come's at number", this.jursieNo, this.bolling);
  }
}

const obj = function () {
  console.log(this.getdatile());
}
let x = obj.bind(player);
x();
console.log(x);