// Construct Binary Search Tree
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3305/

// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

 

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

 

// Note: 

// 1 <= preorder.length <= 100
// The values of preorder are distinct.





// Unused Solutions
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @return {TreeNode}
//  */
// var bstFromPreorder = function(preorder) {
// 	console.log(preorder);

// 	class TreeNode {
// 			constructor (val) {
// 					this.val = val;
// 					this.left = this.right = null;
// 			} 
// 	}
	
// 	const rootNode = new TreeNode(preorder[0]);
// 	console.log(rootNode, 'root');
	
// 	let currentNode = rootNode;
// 	for (let i = 1; i < preorder.length; i++) {
// 			if (preorder[i] < currentNode.val) {
// 					currentNode.left = new TreeNode(preorder[i]);
// 			} else if (preorder[i] > currentNode.val) {
// 					currentNode.right = new TreeNode(preorder[i]);
// 			}
// 	}
// };


// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @return {TreeNode}
//  */
// var bstFromPreorder = function(preorder) {
// 	let root = new TreeNode(preorder[0]);
	
// 	const s = [];
	
// 	s.push(root);
	
// 	let i = 1;
	
// 	while(i < preorder.length){
// 			let temp = null;

// 			while (s && preorder[i] > s[s.length - 1].val){
// 					temp = s.pop();
// 			}

// 			if (temp != null){
// 					temp.right = TreeNode(preorder[i]);
// 					s.push(temp.right);
// 			} else {
// 					temp = s[s.length - 1];
// 					temp.left = TreeNode(preorder[i]);
// 					s.push(temp.left);
// 			}
// 			i++;

// 			return root;
// 	}
// };