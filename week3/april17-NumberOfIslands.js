// Number Of Islands
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3302/

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	// Determine if we have counted the island already
	const countIsland = (grid, x, y, countedIslandsMap) => {
			// Make sure the coordinates are within the grid
			if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
					return;
			}
			
			// If the island has already been counted, no need to count it again
			if(countedIslandsMap[x][y] === true) {
					return;
			}
			
			// If the island has not been counted, mark it as counted
			countedIslandsMap[x][y] = true;
			
			// If the island meets water/"0", stop marking adjacent land/"1s" as counted
			if(grid[x][y] === '0') {
					return;
			}
			
			// Count the islands/"1" touching current island in either x and either y direction
			countIsland(grid, x - 1, y, countedIslandsMap);
			countIsland(grid, x + 1, y, countedIslandsMap);
			countIsland(grid, x, y - 1, countedIslandsMap);
			countIsland(grid, x, y + 1, countedIslandsMap);
	}
	
	const countedIslandsMap = [];
	
	// Initialize the countedIslandsMap
	for (let i = 0; i < grid.length; i++) {
			countedIslandsMap[i] = [];
	}
	
	// Initialize count of islands
	let currentIslandCount = 0;
	
	for (let i = 0; i < grid.length; i++) {
			let currentIslandMap = [];
			for (let j = 0; j < grid[i].length; j++) {
					if (!countedIslandsMap[i][j] && grid[i][j] === '1') {
							// Increment the count of islands
							currentIslandCount++;
							
							// Track whether this island was counted or not
							countIsland(grid, i, j, countedIslandsMap);
					}
			}
	}
	
	return currentIslandCount;
};


// Unused Map
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
// 	// determine if we have counted the island already
// 	const countIsland = (grid, x, y, countedIslandsMap) => {
// 			if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) {
// 					return;
// 			}
			
// 			if(countedIslandsMap[x][y] === true) {
// 					return;
// 			}
			
// 			countedIslandsMap[x][y] = true;
			
// 			if(grid[x][y] === '0') {
// 					return;
// 			}
			
// 			countIsland(grid, x - 1, y, countedIslandsMap;
// 			countIsland(grid, x + 1, y, countedIslandsMap);
// 			countIsland(grid, x, y - 1, countedIslandsMap);
// 			countIsland(grid, x, y + 1, countedIslandsMap);
// 	}
	
// 	const countedIslandsMap = [];
	
// 	let currentIslandCount = 0;
	
// 	for (let i = 0; i < grid.length; i++) {
// 			let currentIslandMap = [];
// 			for (let j = 0; j < grid[i].length; j++) {
// 					if (!countedIslandsMap[i][j] && grid[i][j] === '1') {
// 							// increment the count of islands
// 							currentIslandCount++;
							
// 							// track whether this island was counted or not
// 							countIsland(grid, i, j);
// 					}
// 			}
// 	}
	
// 	console.log(countedIslandsMap, 'countedIslandsMap');

	
// 	for (let i = 0; i < islandsMap.length; i++) {
// 			for (let j = 0; j < islandsMap[i].length; j++) {
// 					if (islandsMap[i][j] === '1' && (islandsMap[i][j-1] !== 1)) {
// 							currentIslandCount += 1;
// 					} else if (i !== 0) {
// 					}
// 			}
// 	}
	
// 	console.log(currentIslandCount);
// };