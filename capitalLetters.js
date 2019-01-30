function LetterCapitalize(str) {
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
      let newArr = arr[i].split("");
      newArr[0] = newArr[0].toUpperCase();
      console.log(newArr);
      arr[i] = newArr.join("");
    }

  // code goes here
  return arr.join(" ");
}

console.log(LetterCapitalize("Argument goes here"));
