/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 * 
 * Example 1:
 * 
 * Input: "code"
 * Output: false
 * 
 * Example 2:
 * 
 * Input: "aab"
 * Output: true
 */

 function canPermutePalindrome(s) {
   // intuition: a palindrome has an even number of every letter
   // and maybe one extra
   const found = {};

   for (let i = 0; i < s.length; i++) {
     const char = s[i];
     if (found.hasOwnProperty(char)) delete found[char];
     else found[char] = 1;
   }

   // return true if either all found values = 0
   // or if just exactly one = 1
   let values = Object.values(found);
   return values.length === 0 || values.length === 1;
 }

 canPermutePalindrome("carerac")