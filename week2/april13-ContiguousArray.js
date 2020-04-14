// Contiguous Array
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3298/

// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0, 1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0, 1, 0]
// Output: 2
// Explanation: [0, 1](or[1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50, 000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;

    if (hash[count] != null) max = Math.max(max, i - hash[count]);
    else hash[count] = i;
  }
  return max;
};

// Solution with comments
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
// 	const determineCountParity = (arr) => {
// 		const counts = arr.reduce((accumulator, number) => {
// 			accumulator[number] += 1;
// 			return accumulator
// 		}, [0, 0]);

// 		console.log(counts, 'counts');

// 		return counts[0] === counts[1];
// 	};

// 	// initialize cache of all arraySubsets that have count parity
// 	const arraySubsetsWithCountParity = [];

// 	// iterate through the array
// 	// create subarrays
// 	for (let i = 0; i < nums.length; i++) {
// 		// initialize cache of current array subset
// 		let currentArrSubset = [];

// 		for (let j = i; j < nums.length; j++) {
// 			currentArrSubset.push(nums[j]);
// 			console.log(currentArrSubset, `${j} iteration from innerloop`);
// 			// if the current array subset has count parity, cache it
// 			if (currentArrSubset.length % 2 === 0 && determineCountParity(currentArrSubset)) {
// 				arraySubsetsWithCountParity.push(currentArrSubset.slice(0));
// 			}
// 			console.log(arraySubsetsWithCountParity, 'arraySubsetsWithCountParity in innerloop');
// 		}
// 		console.log(currentArrSubset, `BROKEN OUT OF INNER FOR LOOP ${i} iteration from outerloop`);
// 	}

// 	// sort the ache of array subsets with count parity by each array's length
// 	// return the array with the largest length
// 	console.log(arraySubsetsWithCountParity.sort(function (a, b) {
// 		return b.length - a.length;
// 	}), '@@@@');
// 	return arraySubsetsWithCountParity.sort(function (a, b) {
// 		return b.length - a.length;
// 	})[0].length;
// };

// Alternate Solution O(N^3)
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
// 	const determineCountParity = (arr) => {
// 		const counts = arr.reduce((accumulator, number) => {
// 			accumulator[number] += 1;
// 			return accumulator
// 		}, [0, 0]);

// 		return counts[0] === counts[1];
// 	};

// 	// initialize cache of all arraySubsets that have count parity
// 	const arraySubsetsWithCountParity = [];

// 	// iterate through the array
// 	// create subarrays
// 	for (let i = 0; i < nums.length; i++) {
// 		// initialize cache of current array subset
// 		let currentArrSubset = [];

// 		for (let j = i; j < nums.length; j++) {
// 			currentArrSubset.push(nums[j]);

// 			// if the current array subset has count parity, cache it
// 			if (currentArrSubset.length % 2 === 0 && determineCountParity(currentArrSubset)) {
// 				arraySubsetsWithCountParity.push(currentArrSubset.slice(0));
// 			}
// 		}
// 	}

// 	// sort the ache of array subsets with count parity by each array's length
// 	// return the array with the largest length
// 	return arraySubsetsWithCountParity.length ? arraySubsetsWithCountParity.sort(function (a, b) {
// 		return b.length - a.length;
// 	})[0].length : 0;
// };

// Alternate Solution O(N^2)
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
// 	// initialize cache of all arraySubsets that have count parity
// 	const arraySubsetsWithCountParity = [];

// 	// iterate through the array
// 	// create subarrays
// 	for (let i = 0; i < nums.length; i++) {
// 		// initialize cache of current array subset
// 		let currentArrSubset = [];

// 		// keep track of the counts of each digit to determine parity
// 		let zeroCount = 0;
// 		let oneCount = 0;

// 		for (let j = i; j < nums.length; j++) {
// 			// count each digit as we create the sub array
// 			if (nums[j] === 0) {
// 				zeroCount += 1;
// 			}
// 			if (nums[j] === 1) {
// 				oneCount += 1;
// 			}

// 			currentArrSubset.push(nums[j]);

// 			// if the current array subset has count parity, cache it
// 			if (zeroCount === oneCount) {
// 				arraySubsetsWithCountParity.push(currentArrSubset.slice(0));
// 			}
// 		}

// 		// reinitialize the counts
// 		zeroCount = 0;
// 		oneCount = 0;
// 	}

// 	// sort the ache of array subsets with count parity by each array's length
// 	// return the array with the largest length
// 	return arraySubsetsWithCountParity.length ? arraySubsetsWithCountParity.sort(function (a, b) {
// 		return b.length - a.length;
// 	})[0].length : 0;
// };

// Alternate Solution O(N^2) with less space
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
// 	// initialize cache of all arraySubsets that have count parity
// 	let maxLengthArraySubsetWithCountParityTemp = [];

// 	// iterate through the array
// 	// create subarrays
// 	for (let i = 0; i < nums.length; i++) {
// 		// initialize cache of current array subset
// 		let currentArrSubset = [];

// 		// keep track of the counts of each digit to determine parity
// 		let zeroCount = 0;
// 		let oneCount = 0;

// 		for (let j = i; j < nums.length; j++) {
// 			// count each digit as we create the sub array
// 			if (nums[j] === 0) {
// 				zeroCount += 1;
// 			}
// 			if (nums[j] === 1) {
// 				oneCount += 1;
// 			}

// 			currentArrSubset.push(nums[j]);

// 			if (zeroCount !== oneCount) {
// 				continue;
// 			}

// 			// if the current array subset has count parity and has a length bigger than the temporary max length of array with parity, cache it
// 			if (currentArrSubset.length > maxLengthArraySubsetWithCountParityTemp.length) {
// 				maxLengthArraySubsetWithCountParityTemp = currentArrSubset.slice(0);
// 			} else {
// 				continue;
// 			}
// 		}

// 		// reinitialize the counts
// 		zeroCount = 0;
// 		oneCount = 0;
// 	}

// 	// sort the ache of array subsets with count parity by each array's length
// 	// return the array with the largest length
// 	return maxLengthArraySubsetWithCountParityTemp.length;
// };

// Unused Partial Solution
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
// 	// intiialize a map of the counts and their indices
// 	const countMap = {
// 		0: 0
// 	};

// 	// initialize cache of length of arraySubset with count parity
// 	let maxLengthArraySubsetWithCountParityTemp = 0;

// 	// keep track of the counts of each digit to determine parity
// 	let zeroCount = 0;
// 	let oneCount = 0;

// 	// iterate through the array
// 	for (let i = 0; i < nums.length; i++) {
// 		// count each digit as we create the sub array
// 		if (nums[i] === 0) {
// 			zeroCount += 1;
// 		}
// 		if (nums[i] === 1) {
// 			oneCount += 1;
// 		}

// 		if (countMap[zeroCount - oneCount]) {
// 			maxLengthArraySubsetWithCountParityTemp = Math.max(maxLengthArraySubsetWithCountParityTemp, i - countMap[zeroCount - oneCount])
// 		} else {
// 			countMap[zeroCount - oneCount] = i;
// 		}
// 	}

// 	// sort the ache of array subsets with count parity by each array's length
// 	// return the array with the largest length
// 	return maxLengthArraySubsetWithCountParityTemp;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
//   // intiialize a map of the counts and their indices
//   const countMap = {
//     0: 0,
//   };

//   // initialize cache of length of arraySubset with count parity
//   let maxLengthArraySubsetWithCountParityTemp = 0;

//   // keep track of the counts of each digit to determine parity
//   let countOfDigitsSum = 0;

//   // iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//     // count each digit as we create the sub array
//     if (nums[i] === 0) {
//       countOfDigitsSum--;
//     } else {
//       countOfDigitsSum++;
//     }

//     if (countMap[countOfDigitsSum]) {
//       maxLengthArraySubsetWithCountParityTemp = Math.max(
//         maxLengthArraySubsetWithCountParityTemp,
//         i - countMap[countOfDigitsSum]
//       );
//     } else {
//       countMap[countOfDigitsSum] = i;
//     }
//   }

//   // sort the ache of array subsets with count parity by each array's length
//   // return the array with the largest length
//   return maxLengthArraySubsetWithCountParityTemp;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxLength = function (nums) {
//   // intiialize a map of the counts and their indices
//   const countMap = {
//     0: 0,
//   };

//   // initialize cache of length of arraySubset with count parity
//   let maxLengthArraySubsetWithCountParityTemp = 0;

//   // keep track of the counts of each digit to determine parity
//   let zeroCount = 0;
//   let oneCount = 0;

//   // iterate through the array
//   for (let i = 0; i < nums.length; i++) {
//     // count each digit as we create the sub array
//     if (nums[i] === 0) {
//       zeroCount += 1;
//     }
//     if (nums[i] === 1) {
//       oneCount += 1;
//     }

//     if (countMap[oneCount - zeroCount]) {
//       maxLengthArraySubsetWithCountParityTemp = Math.max(
//         maxLengthArraySubsetWithCountParityTemp,
//         i - countMap[zeroCount - oneCount]
//       );
//     } else {
//       countMap[zeroCount - oneCount] = i;
//     }
//   }

//   // sort the ache of array subsets with count parity by each array's length
//   // return the array with the largest length
//   return maxLengthArraySubsetWithCountParityTemp;
// };
