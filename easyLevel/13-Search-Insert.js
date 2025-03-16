/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// O(log(N)) 🤞😎
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    }
    let max = nums[nums.length - 1];
    let min = nums[0];
    if (target > max) return nums.length;
    if (target < min) return 0;
    let half = Math.round(nums.length / 2);
    if (target < nums[half]) {
        for (let i = 0; i < half; i++) {
            if (nums[i] < target && nums[i + 1] > target) return i + 1;
        };
         return i;
    };
    if (target > nums[half]) {
    for (let i = half; i < nums.length - 1; i ++) {
        if (nums[i] < target && nums[i + 1] > target) return i + 1;
    };
     return i;
    };
};

console.log(searchInsert([1, 3, 5], 4));
console.log(searchInsert([1, 3], 2));