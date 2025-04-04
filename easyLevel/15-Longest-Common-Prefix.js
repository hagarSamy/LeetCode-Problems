// 14. Longest Common Prefix 
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Time complexity: O(N∗M)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let common = "";
    let cnt = 0;

    while (true) {
        let curr = strs[0][cnt];
        if ((!curr) || curr == "undefined") break;
        for (let i = 1; i < strs.length; i++) {
             if (strs[i][cnt] != curr) return common;
        }
        common += strs[0][cnt];
        cnt++;
    }
    return common;
};