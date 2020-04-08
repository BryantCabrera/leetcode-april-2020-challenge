// Counting Elements
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/

// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.



// Example 1:

// Input: arr = [1, 2, 3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// 	Example 2:

// Input: arr = [1, 1, 3, 3, 5, 5, 7, 7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1, 3, 2, 3, 5, 0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// 	Example 4:

// Input: arr = [1, 1, 2, 2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.


// 	Constraints:

// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000


/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
	// initialize the counter
	let count = 0;

	// loop through the array
	// if the array includes number + 1, add to the counter
	arr.forEach(number => {
		count += arr.includes(number + 1) ? 1 : 0;
	});

	// return the count
	return count;
};


// >>>>> Unused Elements <<<<<
// for tallying each 'valid/counted' number; expands on this problem
// sort the array
    // create a map of the tally of each number where {'number': count}

    // iterate through the map and check if the de-stringified 'number' + 1 is a key in the map
        // if it exists, subtract the count of (number + 1) from that number's count