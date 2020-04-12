// Diameter of Binary Tree
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3293/

// Given a binary tree, you need to compute the length of the diameter of the tree.The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

// 	Example:
// Given a binary tree
// 1
// 	/ \
// 2   3
// 	/ \
// 4   5
// Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3].

// 	Note: The length of path between two nodes is represented by the number of edges between them.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	// recursively determine the longest path to a given currentNode
	const determineDiameter = currentNode => {
		// if the currentNode does not exist, it does not add to the diameter
		if (!currentNode) return 0;

		return 1 + Math.max(determineDiameter(currentNode.left), determineDiameter(currentNode.right));
	};

	// recursively traverse the binary tree and calculate the diameters to the currentNode
	const diameterOfBinaryTree = node => {
		// EDGE CASE
		// if the root is null, there is no diameter
		// if there is no currentNode, it does not add distance to the diameter
		if (!node) return 0;

		const center = determineDiameter(node.left) + determineDiameter(node.right);
		const left = diameterOfBinaryTree(node.left);
		const right = diameterOfBinaryTree(node.right);

		return Math.max(center, left, right);
	};

	return diameterOfBinaryTree(root);
};


// unused while loop BFS
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var diameterOfBinaryTree = function (root) {
// 	console.log(root, 'root');

// 	// initialize the array of possible paths from the root
// 	let leftLevels = 0;
// 	let rightLevels = 0;


// 	const determineLevels = (node, side) => {
// 		// intiialize the current queue
// 		let queue = [{ 1: root[side] }];

// 		// initialize the count of levels
// 		let levelCount = 0;

// 		// traverse the binary tree
// 		while (queue.length) {
// 			// initialize the cache of the current node
// 			// remove the first node in the queue
// 			let currentNode = queue.shift();

// 			// initialize a boolean to tell us if another level is available
// 			let accessedNewLevel = false;

// 			// continue on to the next node
// 			if (currentNode.left) {
// 				// add the next node to queue to traverse
// 				queue.push(currentNode.left);

// 				// if there is a left node, we know there is a new level
// 				accessedNewLevel = true;
// 			}

// 			if (currentNode.right) {
// 				// add the next node to queue to traverse
// 				queue.push(currentNode.right);

// 				// if there is a right node, we know there is a new level
// 				accessedNewLevel = true;
// 			}

// 			if (accessedNewLevel) {

// 			}
// 		}

// 		return levelCount;
// 	}

// 	// EDGE CASES
// 	// if root has no left branches, return length of branch from root to node of end of longest right branch
// 	if (root.left === null) { }
// 	// if root has no right branches, return length of branch from root to node of end of longest left branch
// 	if (root.right === null) { }

// 	// the longest path is the one that touches the most nodes
// 	// so take the longest branches, and if they are not offshots of the same branch, return their length - 1 (so we take into account that we are repeating the root node twice)
// };



// Solution for another problem: longest left branch plus longest right branch WITH LOGS
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var diameterOfBinaryTree = function (root) {
// 	const determineLevels = (node) => {
// 		// intiialize the current queue
// 		let queue = [node];

// 		// initialize the count of levels
// 		let levelCount = 0;

// 		// traverse the binary tree
// 		while (queue.length) {
// 			// count the number of nodes in the current level
// 			console.log(queue, 'queue at beginning of while loop');
// 			let nodesOfCurrentLevel = queue.length;
// 			levelCount += 1;
// 			console.log(levelCount, 'levelCount at currentLevel');

// 			while (nodesOfCurrentLevel > 0) {
// 				console.log(nodesOfCurrentLevel, 'nodesOfCurrentLevel');
// 				// initialize the cache of the current node
// 				// remove the first node in the queue
// 				let currentNode = queue.shift();

// 				// continue on to the next node
// 				if (currentNode.left) {
// 					// add the next node to queue to traverse
// 					queue.push(currentNode.left);
// 				}

// 				if (currentNode.right) {
// 					// add the next node to queue to traverse
// 					queue.push(currentNode.right);
// 				}

// 				// decrement that number of nodes in currentLevel that we have to assess
// 				nodesOfCurrentLevel -= 1;
// 			}
// 		}

// 		return levelCount;
// 	}

// 	console.log(determineLevels(root.left), 'root.left');
// 	console.log(determineLevels(root.right), 'root.right');

// 	// GENERAL CASE +
// 	// EDGE CASES
// 	// if root has no left branches, return length of branch from root to node of end of longest right branch
// 	// if root has no right branches, return length of branch from root to node of end of longest left branch

// 	const leftPathDistanceToRoot = root.left === null ? 0 : determineLevels(root.left);
// 	const rightPathDistanceToRoot = root.right === null ? 0 : determineLevels(root.right);

// 	// the longest path is the one that touches the most nodes
// 	// so take the longest branches on either side of the root and return the sum of their distance to the route (by starting at the second level, we are avoiding counting the root node twice)
// 	return leftPathDistanceToRoot + rightPathDistanceToRoot;
// };



// Solution for another problem: longest left branch plus longest right branch
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var diameterOfBinaryTree = function (root) {
// 	const determineLevels = (node) => {
// 		// initialize the current queue
// 		let queue = [node];

// 		// initialize the count of levels
// 		let levelCount = 0;

// 		// traverse the binary tree
// 		while (queue.length) {
// 			// count the number of nodes in the current level
// 			let nodesOfCurrentLevel = queue.length;

// 			// if we have broken out of the inner while loop, we know we are at a new level
// 			levelCount += 1;

// 			while (nodesOfCurrentLevel > 0) {
// 				// initialize the cache of the current node
// 				// remove the first node in the queue
// 				let currentNode = queue.shift();

// 				// add any child nodes to the queue
// 				if (currentNode.left) {
// 					queue.push(currentNode.left);
// 				}
// 				if (currentNode.right) {
// 					queue.push(currentNode.right);
// 				}

// 				// decrement the number of nodes in currentLevel that we have to assess
// 				nodesOfCurrentLevel -= 1;
// 			}
// 		}

// 		return levelCount;
// 	}

// 	// GENERAL CASE +
// 	// EDGE CASES
// 	// if root is null, it has no distance
// 	if (root === null) {
// 		return 0;
// 	}

// 	// if root has no left branches, return length of branch from root to node of end of longest right branch
// 	// if root has no right branches, return length of branch from root to node of end of longest left branch
// 	const leftPathDistanceToRoot = root.left === null ? 0 : determineLevels(root.left);
// 	const rightPathDistanceToRoot = root.right === null ? 0 : determineLevels(root.right);

// 	// the longest path is the one that touches the most nodes
// 	// so take the longest branches on either side of the root and return the sum of their distance to the route (by starting at the second level, we are avoiding counting the root node twice)
// 	return leftPathDistanceToRoot + rightPathDistanceToRoot;
// };