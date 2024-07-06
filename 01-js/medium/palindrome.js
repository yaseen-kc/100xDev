/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  oldElem = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  newElem = oldElem.split("").reverse().join("");
  return oldElem === newElem;
}

module.exports = isPalindrome;
