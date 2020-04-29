// First Unique Number
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3313/

// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.
 

// Example 1:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output: 
// [null,2,null,2,null,3,null,-1]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

// Example 2:

// Input: 
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
// [[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]
// Output: 
// [null,-1,null,null,null,null,null,17]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([7,7,7,7,7,7]);
// firstUnique.showFirstUnique(); // return -1
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3]
// firstUnique.add(3);            // the queue is now [7,7,7,7,7,7,7,3,3]
// firstUnique.add(7);            // the queue is now [7,7,7,7,7,7,7,3,3,7]
// firstUnique.add(17);           // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
// firstUnique.showFirstUnique(); // return 17

// Example 3:

// Input: 
// ["FirstUnique","showFirstUnique","add","showFirstUnique"]
// [[[809]],[],[809],[]]
// Output: 
// [null,809,null,-1]

// Explanation: 
// FirstUnique firstUnique = new FirstUnique([809]);
// firstUnique.showFirstUnique(); // return 809
// firstUnique.add(809);          // the queue is now [809,809]
// firstUnique.showFirstUnique(); // return -1

 

// Constraints:

// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^8
// 1 <= value <= 10^8
// At most 50000 calls will be made to showFirstUnique and add.


/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
	this.queue = nums;
	this.numCount = this.queue.reduce( (accumulator, num) => {
			accumulator[num] = accumulator[num] ? accumulator[num] + 1 : 1;
			return accumulator;
	}, {});
	this.uniqueNums = this.queue.filter(num => this.numCount[num] === 1);
};

/**
* @return {number}
*/
FirstUnique.prototype.showFirstUnique = function() {
	return this.uniqueNums.length ? this.uniqueNums[0] : -1;
};

/** 
* @param {number} value
* @return {void}
*/
FirstUnique.prototype.add = function(value) {
	if (this.numCount[value] > 0) {
			this.numCount[value]++;
			this.uniqueNums.splice(this.uniqueNums.indexOf(value), 1);
	} else {
			this.numCount[value] = 1;
			this.uniqueNums.push(value);
	}
	
	this.queue.push(value);

};

/** 
* Your FirstUnique object will be instantiated and called as such:
* var obj = new FirstUnique(nums)
* var param_1 = obj.showFirstUnique()
* obj.add(value)
*/


// Attempt #1
// /**
//  * @param {number[]} nums
//  */
// var FirstUnique = function(nums) {
// 	this.queue = nums;
// 	console.log(this.queue, 'queue AFTER Add in BASE function');
// 	this.uniqueNums = [];
	
// 	this.queue.map( num => {
// 			if(!this.uniqueNums.includes(num) && this.queue.filter( element => element === num).length === 1) {
// 					this.uniqueNums.push(num);
// 			}
// 	});
// 	console.log(this.uniqueNums, 'uniqueNums AFTER Add in BASE function');
// };

// /**
// * @return {number}
// */
// FirstUnique.prototype.showFirstUnique = function() {
// 	return this.uniqueNums.length ? this.uniqueNums[0] : -1;
// };

// /** 
// * @param {number} value
// * @return {void}
// */
// FirstUnique.prototype.add = function(value) {
// 	this.queue.includes(value) ? this.uniqueNums.splice(this.uniqueNums.indexOf(value), 1) : this.uniqueNums.push(value);
// 	console.log(this.uniqueNums, 'uniqueNums');
	
// 	this.queue.push(value);
// 	console.log(this.queue, 'queue AFTER Add');
// };

// /** 
// * Your FirstUnique object will be instantiated and called as such:
// * var obj = new FirstUnique(nums)
// * var param_1 = obj.showFirstUnique()
// * obj.add(value)
// */


// Attempt #3
// /**
//  * @param {number[]} nums
//  */
// var FirstUnique = function(nums) {
// 	this.queue = nums;
// 	console.log(this.queue, 'queue AFTER Add in BASE function');
// 	this.numCount = this.queue.reduce( (accumulator, num) => {
// 			accumulator[num] = accumulator[num] ? accumulator[num] + 1 : 1;
// 			return accumulator;
// 	}, {});
// 	console.log(this.numCount, 'numCount');
// 	this.uniqueNums = [];
	
// 	this.queue.map( num => {
// 			if(this.numCount[`${num}`] === 1) {
// 					this.uniqueNums.push(num);
// 			}
// 	});
// 	console.log(this.uniqueNums, 'uniqueNums AFTER Add in BASE function');
// };

// /**
// * @return {number}
// */
// FirstUnique.prototype.showFirstUnique = function() {
// 	return this.uniqueNums.length ? this.uniqueNums[0] : -1;
// };

// /** 
// * @param {number} value
// * @return {void}
// */
// FirstUnique.prototype.add = function(value) {
// 	if (this.numCount[value] > 0) {
// 			this.numCount[value]++;
// 			this.uniqueNums.splice(this.uniqueNums.indexOf(value), 1);
// 	} else {
// 			this.numCount[value] = 1;
// 			this.uniqueNums.push(value);
// 	}
// 	console.log(this.numCount, 'numCount');
// 	console.log(this.uniqueNums, 'uniqueNums');
	
// 	this.queue.push(value);
// 	console.log(this.queue, 'queue AFTER Add');
// };

// /** 
// * Your FirstUnique object will be instantiated and called as such:
// * var obj = new FirstUnique(nums)
// * var param_1 = obj.showFirstUnique()
// * obj.add(value)
// */