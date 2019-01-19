//edit inclues
//adding
//deleting
//replacing
let oneAway = (str1,str2) => {
  let lengthDiff = Math.abs(str1.length-str2.length);
  if(lengthDiff === 0){
    let edit = 0;
    for(let i = 0; i < str1.length; i++){
      //if a character doesn't match we'll count it as an edit
      if(str1[i] !== str2[i]){
        edit++;
        //if edit exceeds 1, we return false
        if(edit > 1){
          return false;
        }
      }
    }
    //if it finished the for loop, then its true.
    return true;
  }
  else if (lengthDiff === 1){
    let edit = 0;
    let longerString = (str1.length > str2.length) ? str1 : str2;
    let shorterString = (str1.length > str2.length) ? str2 : str1;
    //console.log(longerString,shorterString);
    while(longerString.length >= shorterString.length){
      if(longerString[0]!==shorterString[0]){
        edit++;
        if(edit > 1){
          return false;
        }
        longerString = longerString.substring(1);
      }
      else{
        longerString = longerString.substring(1);
        shorterString = shorterString.substring(1);
        if(longerString.length === 0){
          return true;
        }
      }
    }
  }
  else{
    //if length difference exceeds 1, it means its beyond adding, replacing or adding one characters
    return false;
  }
}

console.log(oneAway('hello','hello')); //true
console.log(oneAway('h0llo','hello')); //true
console.log(oneAway('hlelo','hello')); //false
console.log(oneAway('hello2','hello')); //true
console.log(oneAway('hello','hello32')); //false
console.log("--------------");
console.log(oneAway('pale','ple'));
console.log(oneAway('pales','pale'));
console.log(oneAway('pale','bale'));
console.log(oneAway('pale','bake'));
