// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the
//  string. A word is a maximal substring consisting of non-space characters only.

 
/**
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sliced = s.trim().split(" ");
    return sliced[sliced.length-1].length;
};