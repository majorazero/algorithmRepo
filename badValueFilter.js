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

console.log(badValues([0,32,false,3,"",2,'',1,null]));
