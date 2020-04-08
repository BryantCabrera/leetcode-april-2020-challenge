// Middle of the Linked List
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3290/

// Given a non - empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.



// 	Example 1:

// Input: [1, 2, 3, 4, 5]
// Output: Node 3 from this list(Serialization: [3, 4, 5])
// The returned node has value 3.(The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// 	ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
// 		Example 2:

// 	Input: [1, 2, 3, 4, 5, 6]
// Output: Node 4 from this list(Serialization: [4, 5, 6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.


// 	Note:

// The number of nodes in the given list will be between 1 and 100.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	// Initialize the array of node values
	const arrayOfNodeValues = [];

	// Traverse the linkedList
	let current = head;

	while (current.next !== null) {
		// Cache the current node in an array so that we can easily determine the median
		arrayOfNodeValues.push(current);

		// Move on to the next node in the LinkedList
		current = current.next;
	}

	// If we are at the last node, push it into the array
	// This also covers an Edge Case: if there is only 1 node value, the head is the only thing we return
	if (current.next === null) {
		arrayOfNodeValues.push(current);
	}

	// Determine the middle node value in the array
	// If there are 2 middle nodes, return the value of the second
	// I floored the case of an odd # of nodes so that we can account for arrays being 0-indexed (and thus, the median will be indexed at the median rounded down)
	const median = (arrayOfNodeValues.length / 2) % 1 === 0 ? (arrayOfNodeValues.length / 2) : Math.floor(arrayOfNodeValues.length / 2);

	// Return that node as a linkedList
	return arrayOfNodeValues[median];
};