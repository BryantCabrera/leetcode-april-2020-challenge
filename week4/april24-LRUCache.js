// LRU Cache
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3309/

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
 

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.max = capacity;
	this.stack = [];
	this.cache = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
	// If the key was not found, return -1
	if (!this.stack.includes(key) || !this.cache[`${key}`]) {
			return -1;
	}
	
	// Update Stack
	// Since this key was just accessed, put it at the end of the stack
	this.stack = this.stack.filter(element => element != key);
	this.stack.push(key);
	
	return this.cache[`${key}`];
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
	// If they key is already present, do not PUT
	if (this.cache[`${key}`]) {
			// Reset the value of the key in the cache
			this.cache[`${key}`] = value;
			
			// Update stack
			this.stack = this.stack.filter(element => element != key);
	}
	
	if (this.stack.length === this.max) {
			this.stack.shift();
	}
	
	this.cache[key] = value;
	this.stack.push(key);
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/


// Solution with logs
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	this.stack = [];
// 	this.cache = {};
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	// If the key was not found, return -1
// 	if (!this.stack.includes(key) || !this.cache[`${key}`]) {
// 			console.log('No match found: ', !this.cache[`${key}`]);
// 			return -1;
// 	}
	
// 	// Update Stack
// 	// Since this key was just accessed, put it at the end of the stack
// 	this.stack = this.stack.filter(element => element != key);
// 	this.stack.push(key);
	
// 	return this.cache[`${key}`];
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
	
// 	// If they key is already present, do not PUT
// 	if (this.cache[`${key}`]) {
// 			console.log('key already present: ', this.cache[`${key}`]);
// 			this.cache[`${key}`] = value;
// 			console.log('updated key: ', this.cache[`${key}`]);
// 			this.stack = this.stack.filter(element => element != key);
// 			console.log(this.stack, 'updated stack');
// 	}
	
// 	if (this.stack.length === this.max) {
// 			console.log('cache exceeded', this.stack.length === this.max);
// 			this.stack.shift();
// 	}
	
// 	this.cache[key] = value;
// 	console.log(this.cache, 'cache after pushing');
// 	this.stack.push(key);
// 	console.log(this.stack, 'stack after pushing');
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */


// Alternate Solution with cache/object information in stack
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	this.stack = [];
// 	this.cache = {};
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	// If the key was not found, return -1
// 	if (!this.cache[`${key}`]) {
// 			console.log('No match found: ', !this.cache[`${key}`]);
// 			return -1;
// 	}
	
// 	// Update Stack
// 	// Since this key was just accessed, put it at the end of the stack
// 	this.stack = this.stack.filter(element => Object.keys(element)[0] != key);
// 	this.stack.push({[key]: this.cache[key]});
	
// 	return this.cache[`${key}`];
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
// 	const matchingElementInCache = this.stack.filter(element => Object.keys(element)[0] == key);
	
// 	// If they key is already present, do not PUT
// 	if (this.cache[`${key}`]) {
// 			console.log('key already present: ', this.cache[`${key}`]);
// 			this.cache[`${key}`] = value;
// 			console.log('updated key: ', this.cache[`${key}`]);
// 			this.stack = this.stack.filter(element => Object.keys(element)[0] != key);
// 			console.log(this.stack, 'updated stack');
// 	}
	
// 	if (this.stack.length === this.max) {
// 			console.log('cache exceeded', this.stack.length === this.max);
// 			this.stack.shift();
// 	}
	
// 	this.cache[key] = value;
// 	console.log(this.cache, 'after pushing');
// 	this.stack.push({[key]: value});
// 	console.log(this.stack, 'after pushing');
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */



// Alternate Solution with Logs
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	console.log(this.max, 'this.max');
// 	this.cache = [];
// 	console.log(this.cache, 'this.cache');
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	const matchingElementInCache = this.cache.filter(element => Object.keys(element)[0] == key);
// 	console.log(matchingElementInCache, 'matchingElementInCache');
	
// 	// If the key was not found, return -1
// 	if (!matchingElementInCache.length) {
// 			console.log('No match found: ', !matchingElementInCache.length);
// 			return -1;
// 	}
	
// 	// Update Cache
// 	// Since this key was just accessed, put it at the end of the stack
// 	this.cache = this.cache.filter(element => Object.keys(element)[0] != key);
// 	this.cache.push(matchingElementInCache[0]);
	
// 	return matchingElementInCache[0][`${key}`];
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
// 	const matchingElementInCache = this.cache.filter(element => Object.keys(element)[0] == key);
	
// 	// If they key is already present, do not PUT
// 	if (matchingElementInCache.length) {
// 			console.log('key already present: ', matchingElementInCache[0]);
// 			this.cache = this.cache.filter(element => Object.keys(element)[0] != key);
// 			console.log(this.cache, 'updated cache');
// 	}
	
// 	if (this.cache.length === this.max) {
// 			console.log('cache exceeded', this.cache.length === this.max);
// 			this.cache.shift();
// 	}
	
// 	this.cache.push({[key]: value});
// 	console.log(this.cache, 'after pushing');
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */


// Unused Implementations
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	console.log(this.max, 'this.max');
// 	this.cache = new Array(this.max).fill(null);
// 	console.log(this.cache, 'this.cache');
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	return this.cache[key] || -1;
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
// 	if (key > this.max - 1) {
// 			return -1;
// 	}
	
// 	if (this.cache[key] !== null) {
// 			this.cache.pop();
// 	} else {
// 			this.cache[key] = value;
// 	}
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */


// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	console.log(this.max, 'this.max');
// 	this.cache = [];
// 	console.log(this.cache, 'this.cache');
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	return this.cache.filter(element => {
// 			if (element !== null) {
// 					return Object.keys(element)[0] == key
// 			} else {
// 					return false;
// 			}
// 	})[0] || -1;
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
// 	if (this.cache.filter(element => element !== null).length == this.max) {
// 			return -1;
// 	}
	
// 	if (this.cache.filter(element => element !== null).length === this.max) {
// 			console.log('cache exceeded', this.cache.filter(element => element !== null).length === this.max - 1);
// 			this.cache.pop();
// 	} else {
// 			this.cache.push({[key]: value});
// 			console.log(this.cache, 'after pushing');
// 	}
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */


// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
// 	this.max = capacity;
// 	console.log(this.max, 'this.max');
// 	this.cache = [];
// 	console.log(this.cache, 'this.cache');
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
// 	console.log(this.cache.filter(element => Object.keys(element)[0] == key), 'FILTER');
// 	// this.cache.reduce()
// 	const matchingElementInCache = this.cache.filter(element => Object.keys(element)[0] == key);
// 	return matchingElementInCache.length ? matchingElementInCache[0][`${key}`] : -1;
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
// 	if (this.cache.length === this.max) {
// 			console.log('cache exceeded', this.cache.length === this.max);
// 			this.cache.pop();
// 	}
	
// 	this.cache.push({[key]: value});
// 	console.log(this.cache, 'after pushing');
// };

// /** 
// * Your LRUCache object will be instantiated and called as such:
// * var obj = new LRUCache(capacity)
// * var param_1 = obj.get(key)
// * obj.put(key,value)
// */