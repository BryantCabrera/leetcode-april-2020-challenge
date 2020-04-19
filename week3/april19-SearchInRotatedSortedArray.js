// Search in Rotated Sorted Array
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3304/

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let startingIndex = 0;
	let endingIndex = nums.length - 1;
	
	// Iterative binary search
	while (startingIndex <= endingIndex) {
			// Set the middle index of given range
			let middleIndex = Math.floor((startingIndex + endingIndex) / 2);
			
			// If we have found the target, return its index
			if (nums[middleIndex] === target) {
					return middleIndex;
			};
			
			if (nums[startingIndex] <= nums[middleIndex]) {
					// If we are in a part of the array that is has maintained its order
					if (target <= nums[middleIndex] && target >= nums[startingIndex]) {
							// If the target is within this range, continue the binary search
							endingIndex = middleIndex - 1;
					} else {
							// If the target is not within this range, continue the binary search on the other half of this array
							startingIndex = middleIndex + 1;
					}
			} else {
					// If we are in the rotated's array overflow
					if (target > nums[middleIndex] && target <= nums[endingIndex]) {
							// If the target is within this range, continue the binary search
							startingIndex = middleIndex + 1;
					} else {
							// If the target is not within this range, continue the binary search on the other half of this array
							endingIndex = middleIndex - 1;
					}
			}
	}
	
	return -1;
};


// Unused Solutions
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
// 	let tempIndex = 0;
	
// 	let counter = nums.length;
	
// 	const binarySearch = () => {
// 			console.log(tempIndex, 'tempIndex before');
// 			console.log(nums[tempIndex], 'nums[tempIndex]');
// 			counter--;
			
// 			// Edge Cases
// 			// Empty input array
// 			// OR If we have looped through entire array and number is not present, return -1
// 			if (counter === -1) {
// 					return counter;
// 			}
			
// 			if (nums[tempIndex] === target) {
// 					return tempIndex;
// 			} else if (nums[tempIndex] < target) {
// 					tempIndex++;
// 					console.log(tempIndex, 'tempIndex after <');
// 			} else if (nums[tempIndex] > target) {
// 					tempIndex--;
// 					console.log(tempIndex, 'tempIndex after >');
// 			}
			
// 			console.log(counter, 'new counter value');
// 			if (tempIndex < 0) {
// 					tempIndex = nums.length + tempIndex;
// 			}
// 			binarySearch(tempIndex);
// 	};
	
// 	// Edge Cases
// 	// Empty input array
// 	// if (nums.length === 0) {
// 	//     return -1;
// 	// }
	
// 	return binarySearch();
// };


// // Find the index of the pivot
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
// 	const findPivot = (startingIndex, endingIndex) => {
// 			// Edge Cases
// 			// Empty input array
// 			if (startingIndex > endingIndex) {
// 					return -1;
// 			}
			
// 			let middleIndex = Math.floor((endingIndex + startingIndex) / 2);
// 			console.log(`middleIndex: ${middleIndex}, nums[middleIndex]: ${nums[middleIndex]}`);
			
// 			if (nums[middleIndex] === nums[endingIndex]) {
// 					return middleIndex !== nums.length - 1 ? middleIndex : 0;
// 			}
			
// 			if (nums[middleIndex] > nums[endingIndex]) {
// 					return findPivot(middleIndex + 1, endingIndex);
// 			} else if (nums[middleIndex] < nums[endingIndex]) {
// 					return findPivot(startingIndex, middleIndex - 1);
// 			}
// 	};
	
// 	const pivotIndex = findPivot(0, nums.length - 1);
// 	console.log(pivotIndex, 'pivotIndex');
	
// 	const findTarget = (startingIndex, endingIndex) => {
// 			if (startingIndex > endingIndex) {
// 					return -1;
// 			}
			
// 			let middleIndex = Math.floor((startingIndex + endingIndex) / 2);
// 			console.log(middleIndex, 'middleIndex of findTarget');
// 			// if (endingIndex > nums.length) {
// 			//     endingIndex -= nums.length;
// 			// }
			
// 			if (nums[middleIndex] > target) {
// 					return findTarget(startingIndex, middleIndex - 1);
// 			} else if (nums[middleIndex] < target) {
// 					return findTarget(middleIndex + 1, endingIndex);
// 			} else if (nums[middleIndex] === target) {
// 					return middleIndex;
// 			}
// 	}
	
// 	if (pivotIndex === -1) {
// 			return pivotIndex;
// 	} else if (nums[pivotIndex] > target) {
// 			return findTarget(pivotIndex, nums.length - 1);
// 	} else if (nums [pivotIndex] < target) {
// 			return findTarget(0, pivotIndex - 1);
// 	} else if (nums[pivotIndex] === target) {
// 			return pivotIndex;
// 	}
// };