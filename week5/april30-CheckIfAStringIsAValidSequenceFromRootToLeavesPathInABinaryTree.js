// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3315/

// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

 

// Example 1:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// Output: true
// Explanation: 
// The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
// Other valid sequences are: 
// 0 -> 1 -> 1 -> 0 
// 0 -> 0 -> 0
// Example 2:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
// Output: false 
// Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
// Example 3:



// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
// Output: false
// Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 

// Constraints:

// 1 <= arr.length <= 5000
// 0 <= arr[i] <= 9
// Each node's value is between [0 - 9].


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
	if (!root) {
			return arr.length === 0;
	}
	
	const isValid = (root, arr, index) => {
			if (!root || index === arr.length) {
					return false;
			}
			
			if (!root.left && !root.right) {
					if (root.val === arr[index] && index === arr.length - 1) {
							return true;
					}
					
					return false;
			}
			
			return (index < arr.length) && (root.val === arr[index]) && (isValid(root.left, arr, index + 1) || isValid(root.right, arr, index + 1));
	};
	
	return isValid(root, arr, 0);
};


// Attempt #1
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var isValidSequence = function(root, arr) {
// 	let possiblyValidNodesQueue = [root];
// 	console.log(possiblyValidNodesQueue, 'possiblyValidNodesQueue INITIAL');
	
// 	// EDGE CASE: If the root's value does not match the first element in the array, we don't need to traverse the binary tree

// 	let currentIndexInArray = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 			while (possiblyValidNodesQueue.length) {
// 					console.log(possiblyValidNodesQueue, 'possiblyValidNodesQueue BEFORE');
					
// 					// Termination Condition: If there are no more nodes to check and we have not found the value in the sequence, return false
// 					if (i < arr.length && possiblyValidNodesQueue.length === 0) {
// 							return false;
// 					}

// 					if (possiblyValidNodesQueue[0].val === arr[i]) {
// 							if (possiblyValidNodesQueue[0].left !== null) {
// 									possiblyValidNodesQueue.push(possiblyValidNodesQueue[0].left);
// 							}
// 							if (possiblyValidNodesQueue[0].right !== null) {
// 									possiblyValidNodesQueue.push(possiblyValidNodesQueue[0].right);
// 							}
// 					}

// 					possiblyValidNodesQueue.shift();
// 					console.log(possiblyValidNodesQueue, 'possiblyValidNodesQueue AFTER');
// 			}
// 	}
// };