let demo = {
  name: "lucky",
  age: 19,
}
 
console.log(demo);
console.log(demo.age);

demo.age = 20;
demo.collage = "GH Raisoni";   // Add the keyvalue pair
console.log(demo);

delete demo.name;  // Delete the keyvalue pair
console.log(demo);