/**
 * Given an input string, reverse the string word by word.
 *
 * Example 1:
 * 
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 * 
 * Example 2:
 * 
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 * 
 * Example 3:
 * 
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *
 */

function reverseWords(s) {
  const sentence = [];
  let i = 0,
  j = s.length - 1;

  while (s[i] === " ") i++;
  while (s[j] === " ") j--;

  for (; i <= j;) {
    let word = "",
      k = i;

    while (k <= j && s[k] !== " ") word += s[k], k++;

    sentence.push(word);

    while (k <= j && s[k] === " ") k++;

    i = k;
  }

  return sentence.reverse().join(" ");
}

reverseWords("  hello a  world!  ")