// 2724. Sort By
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.
// Example 1:
// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:
// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.


// Not that efficient but ok🫤
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    let map = new Map();
    let newArr = [];
    const sortedArr = [];
    let min = 0;
    let idx = 0;
    for (let x of arr) {
        map.set(fn(x), arr.indexOf(x));
        newArr.push(fn(x));
    };
    while(newArr.length > 0) {
        min = Math.min(...newArr);
        idx = newArr.indexOf(min);
        sortedArr.push(arr[map.get(min)]);
        newArr.splice(idx, 1);  
    }
    return sortedArr;
};