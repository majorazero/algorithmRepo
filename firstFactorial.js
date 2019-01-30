function FirstFactorial(num) {
  let sum = 1;
  while(num > 0){
    sum *= num;
    num--;
  }
  return sum;
}

console.log(FirstFactorial(3));
