// Bitwise AND of Numbers Range
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3308/

// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
	let count = 0;
	
	while (m !== n) {
			m = m >> 1;
			
			n = n >> 1;
			
			count++;
	}
	
	return n << count;
};


// Without transforming Number
// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var rangeBitwiseAnd = function(m, n) {
// 	let temp = m;
	
// 	for (let i = m + 1; i <= n; i++) {
// 			temp = temp & i;
// 	}
	
// 	return temp;
// };


// Transformation into bit
// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var rangeBitwiseAnd = function(m, n) {
// 	let temp = (m >>> 0).toString(2);
	
// 	for (let i = m + 1; i <= n; i++) {
// 			console.log(parseInt(temp, 2), 'parseInt temp');
// 			temp = (parseInt(temp, 2) & i >>> 0).toString(2);
// 			console.log(temp, 'temp');
// 	}
	
// 	return parseInt(temp, 2);
// };