// Binary Tree Maximum Path Sum
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3314/

// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42


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
 * @return {number}
 */
var maxPathSum = function(root) {
	// Initialize a cache to a very small number to account for a path with a negative sum
	let max = -Infinity;
	
	// Recursively traverse the binary tree 
	function getMaxSum(tree) {
			// Termination Condition: Once we have reached a null value, we have reached the end of the branch
			if (tree == null) { 
					return 0; 
			}
			
			// Calculate the root to leaf sum where root is the left node
			const leftBranch = Math.max(0, getMaxSum(tree.left)) ;
			
			// Calculate the root to leaf sum where root is the right node
			const rightBranch = Math.max(0, getMaxSum(tree.right));
			
			// Sum the path: left -> root -> right (leaf to leaf)
			const currentPath = leftBranch + tree.val + rightBranch  
			
			// Set the value of max to be the larger of current max or the current path sums
			max = Math.max(max, currentPath);
			
			return tree.val + Math.max(leftBranch, rightBranch);
	}
	
	getMaxSum(root);
	
	return max; 
};