// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// 	Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
// 	Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// O(n^2)
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



	// cache the subset/subArray

	// initiate set

	// increase numbers in the set to sum

	// sum them

	// store the sums in an array => // store the pair in a map where sum: subset/subArray

	// reinitiate subarray

	// sort the sums array => // compare the keys of this map

	// return the last element of the array => // return the subset/subarray with the largest sum
};




// O(n)