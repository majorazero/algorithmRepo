//Finds a way you can hop up stairs if you can hope 1,2 or 3 steps.
const tripSteps = (n) => {
  if(n < 0){
    return 0;
  }
  else if (n === 0){
    return 1;
  }
  else {
    return tripSteps(n-1) + tripSteps(n-2) + tripSteps(n-3);
  }
}

console.log(tripSteps(3));
console.log(tripSteps(4));
console.log(tripSteps(5));
