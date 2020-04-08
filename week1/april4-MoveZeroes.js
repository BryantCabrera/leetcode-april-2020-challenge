// Move Zeroes
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	const indexOfZeros = [];
	nums.forEach((num, index) => {
		if (num === 0) {
			indexOfZeros.push(index);
		}
	});

	for (let i = indexOfZeros.length - 1; i >= 0; i--) {
		nums.splice(indexOfZeros[i], 1);

		nums.push(0);
	}
};