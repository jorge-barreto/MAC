/**
 * Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.
 * 
 * A string s is said to be one distance apart from a string t if you can:
 * 
 *     Insert exactly one character into s to get t.
 *     Delete exactly one character from s to get t.
 *     Replace exactly one character of s with a different character to get t.
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: s = "ab", t = "acb"
 * Output: true
 * Explanation: We can insert 'c' into s to get t.
 * 
 * Example 2:
 * 
 * Input: s = "", t = ""
 * Output: false
 * Explanation: We cannot get t from s by only one step.
 * 
 * Example 3:
 * 
 * Input: s = "a", t = ""
 * Output: true
 * 
 * Example 4:
 * 
 * Input: s = "", t = "A"
 * Output: true
 * 
 *  
 * 
 * Constraints:
 * 
 *     0 <= s.length <= 104
 *     0 <= t.length <= 104
 *     s and t consist of lower-case letters, upper-case letters and/or digits.
 * 
 * 
 */

function oneEditDistance(s, t) {
  let len = Math.abs(s.length - t.length);

  switch(len) {
    case 0:
      let diff = 0;
      for (let i=0; i<s.length; i++) {
        if (diff > 1) break;
        if (s[i] !== t[i]) diff++;
      }
      return diff === 1;
    case 1:
      // true iff all but one of s is in the same order as t
      // "all but one in the same order" means that except for s[k], 
      // t === s[0...k-1]+s[k+1...s.length]
      let i = 0, k = Math.max(s.length, t.length);
      while (s[i] === t[i]) i++;
      for (let js = s.length - 1, jt = t.length - 1; js >= i || jt >= i; js--, jt--) {
        if (s[js] !== t[jt]) {
          k = Math.max(js, jt) + 1;
          break;
        } else {
          if (js - 1 >= i || jt - 1 >= i) k--;
        }
      }

      return k - i === 1;
    default:
      return false;
  }
}

oneEditDistance("aaaaaa", "aaaaa");