const palindrome = (str) => {
  let string = str.replace(/\s/g,'');
  if(string.length >= 2){
    for(let i = 0; i < Math.floor(string.length/2); i++){
      if(string[i].toLowerCase() !== string[string.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
  }
  else if(string.length < 1){
    return false;
  }
  else {
    return true;
  }
}

console.log(palindrome("ab"));
console.log(palindrome("aba"));
console.log(palindrome("ab a"));
console.log(palindrome("Able was I ere I saw Elba"));
console.log(palindrome("abs"));
