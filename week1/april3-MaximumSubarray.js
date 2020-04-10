// Maximum Subarray
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3285/

// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// 	Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
// 	Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// O(n^3)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	const sums = [];

	// traverse the array
	for (let i = 0; i < nums.length; i++) {
		// cache the subset/subArray
		let subarray = [];

		// initiate set
		// increase numbers in the set to sum
		for (let j = i; j < nums.length; j++) {
			subarray.push(nums[j]);

			// sum them
			const summedSubarray = subarray.reduce((acc, num) => {
				return acc += num;
			}, 0);

			// store the sums in an array
			sums.push(summedSubarray);
		}

		// re-initiate subarray
		subarray = [];
	}

	// sort the sums array
	sums.sort(function (a, b) {
		return a - b;
	});

	// return the last element of the array
	return sums[sums.length - 1];
};

///////////
///////////
///////////
///////////
///////////

// O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	const sums = [];

	// traverse the array
	for (let i = 0; i < nums.length; i++) {
		// cache the current sum
		let currentSum = 0;

		// initiate set
		// increase numbers in the set to sum
		for (let j = i; j < nums.length; j++) {
			// sum them
			currentSum += nums[j];

			// store the sums in an array
			sums.push(currentSum);
		}

		// re-initiate subarray
		subarray = [];
	}

	// sort the sums array
	sums.sort(function (a, b) {
		return a - b;
	});

	// return the last element of the array
	return sums[sums.length - 1];
};

///////////
///////////
///////////
///////////
///////////

// O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	// initialize the sum
	let maxSum = 0;
	let currentSum = 0;

	// traverse the array
	for (let i = 0; i < nums.length; i++) {

		// if the currentSum + the current number in the loop is less than or equal to 0, 
		// reinitialize sum to current number
		if (currentSum + nums[i] <= 0) {
			currentSum = 0;
			console.log(currentSum, 'currentSum reinitiated');
		} else {
			// if the currentSum + the current number in the loop is positive, continue adding
			currentSum += nums[i];
			if (currentSum > maxSum) {
				maxSum = currentSum;
			}
		}
	}

	// Edge Cases
	// all positive #s in the array
	let containsAllPositiveNums = true;
	nums.map(num => {
		if (num / Math.abs(num) === -1) containsAllPositiveNums = false;
	});
	if (containsAllPositiveNums) {
		return nums.reduce((acc, num) => {
			return acc += num;
		}, 0);
	}

	// all negative #s in the array
	let containsAllNegativeNums = true;
	nums.map(num => {
		if (num / Math.abs(num) !== -1) containsAllNegativeNums = false;
	});
	if (containsAllNegativeNums) {
		const sortedArr = nums.sort(function (a, b) {
			return a - b;
		});
		return sortedArr[sortedArr.length - 1];
	}

	// return the sum
	return maxSum;
};