// Maximal Square
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3312/

// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4


/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
	// Initialize the maximum side length
	let max = 0;
	
	// Iterate through the rows
	for (let i = 0; i < matrix.length; i++) {
			// Iterate through the elements in a row/different columns within the row
			for (let j = 0; j < matrix[0].length; j++) {
					// If the element is a 0, do not add to the counter
					if (matrix[i][j] === "0") {
							continue;
					}
					
					// If we are not in the first row and not in the first column, determine if the element is surrounded by a 0.  The 1st point to the top left of the current element (on a diagonal, and not in the square in question) is our boundary and will help us set the values for the counter in our map of the matrix.
					if (i > 0 && j > 0) {
							matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1;
					}
					
					// Set the max equal to the max of (the current count and the current max)
					max = Math.max(matrix[i][j], max);
			}
	}
	
	// Since we have determined the max length of a side of the square, square it to get the area of the square
	return max ** 2;
};


// Attempt #1
// /**
//  * @param {character[][]} matrix
//  * @return {number}
//  */
// var maximalSquare = function(matrix) {
// 	console.log(matrix);
	
// 	// Determine the limiting factors
// 	let maximumRowWidth = matrix[0].length;
// 	let maximumColumnLength = 0;
	
// 	// Iterate through the rows
// 	for (let i= 0; i < matrix.length; i++) {
// 			console.log(maximumRowWidth, 'maximumRowWidth BEFORE');
// 			let smallestRow = matrix[i].length;
// 			let tempSmallestRow = matrix[i].length;
// 			for (let j = 0; j < matrix[i].lengthl; j++) {
// 					console.log(tempSmallestRow, 'tempSmallestRow BEFORE');
// 					if (matrix[i][j] === 1) {
// 							tempSmallestRow++;
// 					} else {
// 							if (tempSmallestRow < smallestRow) {
// 									smallestRow = tempSmallestRow;
// 							}
// 							tempSmallestRow = 0;
// 					}
// 					console.log(tempSmallestRow, 'tempSmallestRow AFTER');
// 			}
			
// 			if (smallestRow < maximumRowWidth) {
// 					maximumRowWidth = smallestRow;
// 			}
// 			console.log(maximumRowWidth, 'maximumRowWidth AFTER');
// 	}
// };