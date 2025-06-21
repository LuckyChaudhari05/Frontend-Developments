
  let a = 5;
  let i = 1;

  console.log("Enter the number : ");
  while (i <= a)
  {
    let j = 1;
     let string = "";
    while (j <= a)
    {
      string += "*";
      j++;
    }
    console.log(string);
    i++;
  }

  return 0;