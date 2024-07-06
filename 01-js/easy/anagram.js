/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str1.length) {
    return false;
  }

  let sortStr1 = str1.toLowerCase().split("").sort().join("");
  let sortStr2 = str2.toLowerCase().split("").sort().join("");

  return sortStr1 === sortStr2;
}

module.exports = isAnagram;
