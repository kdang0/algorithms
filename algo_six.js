/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex, endIndex)
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str, length = str.length-1, newStr="") {
    if(length < 0){
        return newStr;
    } 
    newStr += str[length];
    return reverseStr(str, length-1, newStr);
}

console.log(reverseStr("luke"));

/*****************************************************************************/