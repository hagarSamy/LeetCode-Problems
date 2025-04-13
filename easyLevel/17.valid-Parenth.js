// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1: Input: s = "()"    Output: true
// Example 2: Input: s = "()[]{}"    Output: true
// Example 3: Input: s = "(]"      Output: false
// Example 4: Input: s = "([])"     Output: true

// Time Complexity: O(N)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) return false;

    let arr = [];
    let tracker = 0;
    const openings = ['(', '[', '{'];
    const closings = [')', ']', '}'];
    const pairs =  new Map();
    pairs.set("(", ")");
    pairs.set("{", "}");
    pairs.set("[", "]");

    for (let i of s) {
        if (openings.includes(i)) {
            arr.unshift(i);
        } else {
            tracker++;
            if(pairs.get(arr[0]) === i) {
                arr.shift();
            } else return false;
        }
    }
    if (tracker * 2 < s.length) return false;
    return true;
};