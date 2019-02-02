const uniqueArray = (num1,num2) => {
  let diff = num2 - num1;
  if(diff === 0){
    return [num1];
  }
  let arr = [];
  for(let i = num1; (diff > 0) ? i <= num2 : i >= num2; (diff > 0) ? i++ : i--){
    arr.push(i);
  }
  return arr;
};

console.log(uniqueArray(1,2));
console.log(uniqueArray(1,1));
console.log(uniqueArray(1,3));
console.log(uniqueArray(3,1));
console.log(uniqueArray(3,-1));
console.log(uniqueArray(-3,1));
