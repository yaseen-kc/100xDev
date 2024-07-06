/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  totalCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let splitStr = str.toLowerCase().split("");
  for (let i = 0; i < splitStr.length; i++) {
    for (let j = 0; j < splitStr.length; j++) {
      if (vowels[i] === splitStr[j]) {
        totalCount++;
      }
    }
  }
  return totalCount;
}

module.exports = countVowels;
