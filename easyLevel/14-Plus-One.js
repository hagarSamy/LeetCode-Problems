// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// O(1)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = '';
    for (let x of digits) {
        str += x;
    }
    console.log(str);
    const num = str.length < 16 ? Number(str) + 1 : BigInt(str) + 1n;
    console.log(num);
    let arr = [];
    let st = String(num);
    for (let i = 0; i < st.length; i++) {
        arr.push(Number(st[i]));
    }
    console.log(arr);
};

plusOne([1,2,3]);