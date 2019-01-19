/**
* Compresses strings into their character and thier number of repetition
* or if no compression is needed returns original string
* @param {String} string - The string that's to be compressed
*/
let stringCompression = (string) => {
  let compress = '';
  let edited = false;
  let arr = [];
  let obj = {char: string[0], count: 0};
  for(let i = 0; i < string.length; i++){
    //if the char matches we count it
    if(obj.char === string[i]){
      obj.count++;
      if(obj.count > 1){
        edited = true;
      }
    }
    //if it doesnt match
    else{
      //we push the object
      arr.push(obj);
      //instantiate a new object
      if(string[i+1] !== undefined){
        obj = {char: string[i+1], count: 0};
      }
    }
    if(i === string.length-1){
      if(obj.char === string[i]){
        obj.count++;
      }
      else{
        obj={char: string[i], count: 1};
      }
      arr.push(obj);
    }
  }

  for(let i = 0; i < arr.length; i++){
    compress += `${arr[i].char}${arr[i].count}`;
  }
  if(edited === false){
    return string;
  }
  else{
    return compress;
  }
}

console.log(stringCompression('aabbaaabbbbb'));
console.log(stringCompression('aabcccccaaac'));
console.log(stringCompression(''));
console.log(stringCompression('abcd'));
