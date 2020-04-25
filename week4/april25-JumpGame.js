// Jump Game
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3310/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) { 
	let lastIndex = nums.length - 1;
	for (let i = nums.length - 2; i >= 0; --i) {
			if (i + nums[i] >= lastIndex) {
					lastIndex = i;
			}
	}
	return lastIndex === 0;
};


// Attempt # 1
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
// 	let end = nums.length - 1;
	
// 	// let distanceTraveled = 0;
// 	// let currentJump = 0;
	
// 	for (let i = nums.length - 2; i >= 0; i--) {
// 			if (nums[i] + i >= end) {
// 					end = i
// 			}
// 	}
	
// 	if (end === 0) {
// 			return true;
// 	} else {
// 			return false;
// 	}
	
// //     for (let i = 0; i < nums.length; i++) {
			
// //         if (distanceTraveled < end) {
// //             distanceTraveled += nums[i];
					
// //             currentJump = nums[i]
					
// //             i = nums[i];
					
// //         //     if (i === nums.length) {
// //         //         return false;
// //         //     } else {
// //         //         for (let j = nums[i] - 1; j >= 0; j--) {
// //         //             if (distanceTraveled < end) {
// //         //                 i = nums[j];
// //         //                 break
// //         //             } else {
// //         //                 break
// //         //             }
// //         //             break
// //         //         } 
// //         //         break
// //         //     }
// //         // } else {
// //         //     return true;
// //         // }
					
// //             if (i === nums.length) {
// //                 return false
// //             }
// //         } else {
// //             return true;
// //         }
			
// //     }
	
// //     const addDistance = function(jumpValue) {
// //         distanceTraveled += jumpValue;
// //     }
	
// //     const subtractDistance = function(jumpValue) {
// //         distanceTraveled -= jumpValue;
// //     }
// };


// Attempt #2
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
// 	// If you can avoid a 0, that will let you continue down the array  
// 	let pathSum = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 			// If the sum of the paths leading up to a 0 is bigger than that 0's index, it is safe to assume that you can avoid landing on that 0
// 			if (nums[i] === 0) {
// 					if (pathSum <= i) {
// 							console.log(pathSum, 'pathSum in <= i case');
// 							return false;
// 					}
// 			}
			
// 			// Count the possible indices from your current position that you can move forward to
// 			console.log(pathSum, 'pathSum before');
// 			pathSum += nums[i];
// 			console.log(pathSum, 'pathSum after');
// 	}
	
// 	return true;
// };


// Attempt #3
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) { 
// 	// Find the indices of the 0s
// 	const indicesOfZeros = [];
// 	for (let i = 0; i < nums.length; i++) {
// 			if (nums[i] === 0) {
// 					indicesOfZeros.push(i);
// 			}
// 	}
// 	console.log(indicesOfZeros, 'indicesOfZeros');
	
// 	// EDGE CASE: If the value of the element at the 1st index is 0
// 	if (nums[0] === 0) {
// 			return nums.length === 1 ? true : false;
// 	}
	
// 	// Determine if you can avoid landing on all zeros
// 	// If you can avoid a 0, that will let you continue down the array  
// 	for (let j = 0; j < indicesOfZeros.length; j++) {    
// 			let canPassThisZero = false;
			
// 			// Determine the index of the previous zero
// 			// If this is the first zero, start loop from the beginning of the array (index 0) rather than the previous 0's index
// 			let indexOfPreviousZero = j !== 0 ? indicesOfZeros[j - 1] : 0;
// 			console.log(indexOfPreviousZero, 'indexOfPreviousZero');
			
// 			// Loop from the (index of the last 0) + 1 to the current 0's index
// 			for (let k = indexOfPreviousZero; k < indicesOfZeros[j]; k++) {
// 					// If the value of the element is bigger than (that 0's index - current index), it is safe to assume that you can avoid landing on that 0
// 					console.log(nums[k], 'nums[k] in inner for loop');
// 					if (nums[k] > (indicesOfZeros[j] - (indexOfPreviousZero + k))) {
// 							console.log(indicesOfZeros[j] - (indexOfPreviousZero + k), 'distance to next 0');
// 							canPassThisZero = true;
// 					}
// 			}
			
// 			console.log(canPassThisZero, 'canPassThisZero ?');
			
// 			// If we cannot pass this zero, we know it is not possible to get to the end. 
// 			// We don't need to check the rest of the zeros
// 			if (!canPassThisZero) {
// 					return false;
// 			}
// 	}
	
// 	return true;
// };