let checkPermutation = (string1, string2) => {
  //we can at least just get this out of the way.
  if(string1.length !== string2.length){
    return false;
  }
  else{
    //i basically need to check if they have the same number of characters.
    let comparator1 = {};
    let comparator2 = {};
    for(let i = 0; i < string1.length; i++){
      if(comparator1[string1[i]] === undefined){
        comparator1[string1[i]] = 1;
      }
      else{
        comparator1[string1[i]]++;
      }
      if(comparator2[string2[i]] === undefined){
        comparator2[string2[i]] = 1;
      }
      else{
        comparator2[string2[i]]++;
      }
    }
    for(let x in comparator1){
      if(comparator1[x] !== comparator2[x]){
        return false;
      }
    }
    return true;
  }
};

console.log(checkPermutation('abcd','abc'));
console.log(checkPermutation('abcd','abce'));
console.log(checkPermutation('abcd','abcd'));
console.log(checkPermutation('dcba','abcd'));
console.log(checkPermutation('abce','abcd'));
console.log(checkPermutation('abzc','abed'));
console.log(checkPermutation('cdbeeez','eeecdbz'));
