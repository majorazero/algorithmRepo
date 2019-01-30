function SimpleSymbols(str) {
    for(let i = 0; i< str.length; i++){
        let currChar = str[i].charCodeAt(0);
        if ((currChar <= 121 && currChar >= 97) || (currChar <= 89 && currChar >= 65)){
            if(str[i-1] !== "+" || str[i+1] !== "+"){
                return false;
            }
        }
    }
    return true;
}

console.log(SimpleSymbols("+d+=3=+s+"));
