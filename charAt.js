function LetterChanges(str) {
  let newString = "";
  for(let i = 0; i < str.length; i++){
   let currChar = str[i].charCodeAt(0);
   if ((currChar <= 121 && currChar >= 97) || (currChar <= 89 && currChar >= 65)){
     str[i] = str[i]++;
     currChar++;
     let newChar = String.fromCharCode(currChar);
     if(/[aeiou]/.test(newChar)){
       newChar = newChar.toUpperCase();
     }
     newString += newChar;
   }
   else{
     newString += str[i];
   }
  }
  return newString;
}

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));
