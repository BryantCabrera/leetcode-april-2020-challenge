// Longest Common Subsequence
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3311/

// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

// If there is no common subsequence, return 0.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	// Initialize an array to keep track of the matches between string 1 and string 2
	let test1Arr = new Array(text1.length + 1);
	
	// Iterate through string 1 and at each index, intialize an array the size string 2's length where each element of that subarray is 0
	for (let i = 0; i <= text1.length; i++) {
			test1Arr[i] = (new Array(text2.length + 1)).fill(0);
	}
	
	// Iterate through text
	for (let i = 1; i <= text1.length; i++){
			for(let j = 1; j <= text2.length; j++){
					if (text1[i-1] === text2[j-1]){
							// If the previous character in string 1 is the same as the previous character in string 2, increase the counter of the longest running subsequence
							test1Arr[i][j] = 1 + test1Arr[i-1][j-1];
					} else {
							// Else, that index 
							test1Arr[i][j] = Math.max(test1Arr[i][j-1], test1Arr[i-1][j]);
					}
			}
	}
	
	return test1Arr[text1.length][text2.length];
};