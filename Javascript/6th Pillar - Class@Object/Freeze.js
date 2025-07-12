let arr = [10,20,54,96];

let obj = {
  x : 10, 
  y : 20,
  z : 30
}
Object.freeze(obj);  // with Freeze you can't update or add new key value pair
obj.x = 40;
console.log(obj);

let obj1 = {
  x : 10, 
  y : 20,
}
Object.seal(obj1);  // Seal Property helps you to update the value
obj1.x = 50;
obj1.z = 30;        // But you can't add new key value pair 
console.log(obj1);