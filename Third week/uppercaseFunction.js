let returnArray = new Array()
function toUpper (str1, str2, str3) { 
  for (let i = 0; i < 3; i++) {
    returnArray[i] = arguments[i].toUpperCase();
    }
    return returnArray;
}