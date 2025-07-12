const player  = {
  firstname : "Lucky",
  lastname : "Chaudhari",
  jursieNo : 99,
  bolling : false,
  getdatile : function () {
    console.log(this.firstname , this.lastname ,"Come's at number", this.jursieNo, this.bolling);
  }
}

const obj = function (x,y) {
  console.log(x + y);
 this.getdatile();
}

obj.call(player,10,5);  // Call will return the same object

