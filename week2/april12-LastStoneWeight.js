// Last Stone Weight
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3297/

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.Suppose the stones have weights x and y with x <= y.The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x.
// At the end, there is at most 1 stone left.Return the weight of this stone(or 0 if there are no stones left.)



// Example 1:

// Input: [2, 7, 4, 1, 8, 1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to[2, 4, 1, 1, 1] then,
// 	we combine 2 and 4 to get 2 so the array converts to[2, 1, 1, 1] then,
// 		we combine 2 and 1 to get 1 so the array converts to[1, 1, 1] then,
// 			we combine 1 and 1 to get 0 so the array converts to[1] then that's the value of last stone.


// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	while (stones.length > 1) {
		// sort the stones in descending weight order
		stones.sort(function (a, b) {
			return b - a;
		});

		stones[0] === stones[1] ? null : stones.push(Math.abs(stones[0] - stones[1]));
		stones.splice(0, 2);
	}

	return stones;
};


// Alternate Solution: Nested Ternary
// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var lastStoneWeight = function (stones) {
// 	// sort the stones in descending weight order
// 	stones.sort(function (a, b) {
// 		return b - a;
// 	});

// 	return stones.reduce((accumulator, stone) => {
// 		return accumulator = stone === accumulator ?
// 			0 :
// 			(stone > accumulator ?
// 				stone - accumulator :
// 				accumulator - stone);
// 	}, 0);
// };


// Alternate Solution: Absolute Value
// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var lastStoneWeight = function (stones) {
// 	// sort the stones in descending weight order
// 	stones.sort(function (a, b) {
// 		return b - a;
// 	});

// 	console.log(stones, 'stones');
// 	return stones.reduce((accumulator, stone) => {
// 		console.log('stone: ', stone, '. accumulator: ', accumulator)
// 		return accumulator = stone === accumulator ? 0 : Math.abs(stone - accumulator);
// 	}, 0);
// };