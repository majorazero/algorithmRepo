const badValues = (arr) => {
  while(arr.indexOf(null) !== -1){
    arr.splice(arr.indexOf(null),1);
  }
  while(arr.indexOf('') !== -1){
    arr.splice(arr.indexOf(''),1);
  }
  while(arr.indexOf(0) !== -1){
    arr.splice(arr.indexOf(0),1);
  }
  while(arr.indexOf(false) !== -1){
    arr.splice(arr.indexOf(false),1);
  }
  return arr;
}

const badValues2 = (arr) => {
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case 0:
      case "":
      case false:
      case null:
        arr.splice(i,1);
        i--;
        break;
      default:
    }
  }
  return arr;
}

console.log(badValues([0,32,false,3,"",2,'',1,null]));
console.log(badValues2([0,32,false,3,"",2,'',1,null,0]));
