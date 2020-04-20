// Minimum Path Sum
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3303/

//Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the s

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	let currentPosition = [0, 0];
	
	// Map where [sumFromRightMoveToThisNode, sumFromDownMoveToThisNode]
	let costMap = [];
	
	for (let i = 0; i < grid.length; i ++) {
			costMap.push([]);
			
			for (let j = 0; j < grid[i].length; j++) {
					if (i === 0 && j === 0) {
							costMap[i].push(grid[i][j]);
					} else if (i === 0 && j !== 0) {
							costMap[i].push(grid[i][j] + costMap[i][j - 1]);
					} else if (i !== 0 && j === 0) {
							costMap[i].push(grid[i][j] + costMap[i - 1][j]);
					} else {
							costMap[i].push(Math.min(grid[i][j] + costMap[i][j - 1], grid[i][j] + costMap[i - 1][j]));
					}    
			}
	}
	
	return costMap[costMap.length - 1][costMap[costMap.length - 1].length - 1]
};