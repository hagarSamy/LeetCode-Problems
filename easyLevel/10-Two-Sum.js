// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// ##UNEFFICEINT ENOUGH -- lengthy runtime = 48 ms

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] == target)
//             return [i,j]
//         }
//     }
// };

// ##MORE EFFICIENT 😁⭐ runtime = 0 ms 🤞
var twoSum = function(nums, target) {
    let rest  = target;
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        rest = target - nums[i];
        if (map.has(rest)) {
            return [map.get(rest), i]
        }
        map.set(nums[i], i);
    }
    return [];
};