function* fetchNext(){   
  console.log("Start");
  x= 10;
  yield 11;
  console.log("second");
  const y = x +(yield 30);
  console.log("Third", y);
}
const iter = fetchNext();
console.log(iter.next());     
console.log(iter.next());     
console.log(iter.next(11));     