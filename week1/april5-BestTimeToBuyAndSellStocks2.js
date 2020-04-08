// Best Time To Buy And Sell Stock 2
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3287/

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

// 	Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

// 		Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.
// Example 2:

// Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.
// 	Example 3:

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// General Case
	// loop through profitMap
	return prices.reduce((acc, price, index) => {
		const profit = prices[index + 1] - price;
		if (profit > 0 && index !== prices.length - 1) {
			acc += profit;
		}
		return acc;
	}, 0);
};



// unused pieces
// // create an array of the possible profits
// //     const loopThroughDaysProfits = (currentDay) => {
// //         return for (let l = 0; l < profitMap[k].length; l++) {

// //         }
// //     };

// // loop through profitMap
// for (let k = 0; k < profitMap.length; k++) {
// 	// cache currentProfit
// 	let currentProfit = 0;

// 	// loop through that day's profits
// 	for (let l = 0; l < profitMap[k].length; l++) {
// 		currentProfit += profitMap[k][l];

// 		// traverse down the rest of the profitMap by correct day
// 		let index = k + l + 1;
// 		while (index < profitMap.length) {
// 			for 
//             }
// 	}

// 	// reinitialize currentProfit
// 	currentProfit = 0;
// }


// >>>>>>>> unused helper methods
// const findTheProfit = (arrOfPrices, currentIndex) => {
// 	let currentDay = currentIndex;
// 	let currentTotalProfit = 0;

// 	while (currentDay < prices.length - 1) {
// 		const profit = profitMap[currentDay][currentIndex];

// 		if (profit > 0) {
// 			currentTotalProfit += profit;
// 			currentDay = currentIndex + 1 + profitMap[currentDay].indexOf(profit);
// 			console.log(currentDay, 'currentDay');
// 		} else {
// 			break;
// 		}

// 	}
// };

// const possibleTotalProfits = [];

// // loop through profitMap
// for (let k = 0; k < profitMap.length; k++) {


// 	possibleTotalProfits.push(currentTotalProfit);
// 	console.log(currentTotalProfit, `currentTotalProfit as of Day ${k}`);
// 	currentTotalProfit = 0;
// }

// console.log(possibleTotalProfits, 'possibleTotaleProfits');


// >>>>>>>>>>>>>>>>> unused BiggestIntermediateProfit
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
// 	// create a profit map where { index of day you are buying: [array of profits from selling in subsequent days]}
// 	const profitMap = [];

// 	// loop through the array
// 	for (let i = 0; i < prices.length - 1; i++) {
// 		// cache the profits
// 		let profits = [];

// 		// if not the last day, loop through the rest of the array to calculate the profit (buying on current day i, selling on the subsequent days)
// 		if (i !== prices.length - 1) {
// 			for (let j = i + 1; j < prices.length; j++) {
// 				profits.push(prices[j] - prices[i]);
// 			}
// 		}

// 		// update the profitMap
// 		profitMap.push(profits);

// 		// reset the cache of profits
// 		profits = [];
// 	}

// 	console.log(profitMap, 'profitMap');


// 	const findTheBiggestIntermediateProfit = (arrOfPrices) => {
// 		const arrOfPricesCopy = arrOfPrices.slice(0, prices[prices.length]).sort(function (a, b) {
// 			return a - b;
// 		});

// 		return arrOfPricesCopy[arrOfPricesCopy.length - 1];
// 	};

// 	const possibleTotalProfits = [];

// 	// loop through profitMap
// 	for (let k = 0; k < profitMap.length; k++) {
// 		let currentDay = k;
// 		let currentTotalProfit = 0;

// 		while (currentDay < prices.length - 1) {
// 			const biggestIntermediateProfit = findTheBiggestIntermediateProfit(profitMap[currentDay]);
// 			console.log(biggestIntermediateProfit, `biggestIntermediateProfit of Day ${currentDay}`);

// 			if (biggestIntermediateProfit > 0) {
// 				currentTotalProfit += biggestIntermediateProfit;
// 				currentDay = k + 1 + profitMap[currentDay].indexOf(biggestIntermediateProfit);
// 				console.log(currentDay, 'currentDay');
// 			} else {
// 				break;
// 			}

// 		}

// 		possibleTotalProfits.push(currentTotalProfit);
// 		console.log(currentTotalProfit, `currentTotalProfit as of Day ${k}`);
// 		currentTotalProfit = 0;
// 	}

// 	console.log(possibleTotalProfits, 'possibleTotaleProfits');



// 	// Edge Cases
// 	const pricesCopy = prices.slice(0, prices[prices.length]);

// 	// if sorted array descending, then return 0
// 	const pricesCopyDescending = pricesCopy.sort(function (a, b) {
// 		return b - a;
// 	})

// 	if (JSON.stringify(prices) == JSON.stringify(pricesCopyDescending)) {
// 		return 0;
// 	}

// 	// if sorted array ascending, then buy 0 index, sell last index
// 	const pricesCopyAscending = pricesCopy.sort(function (a, b) {
// 		return a - b;
// 	})

// 	if (JSON.stringify(prices) == JSON.stringify(pricesCopyAscending)) {
// 		return prices[prices.length - 1] - prices[0];
// 	}
// };




///// >>>>>>>> SOLUTION ATTEMPT #1
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
// 	// create a profit map where { index of day you are buying: [array of profits from selling in subsequent days]}
// 	const profitMap = [];

// 	// loop through the array
// 	for (let i = 0; i < prices.length - 1; i++) {
// 		// cache the profits
// 		let profits = [];

// 		// if not the last day, loop through the rest of the array to calculate the profit (buying on current day i, selling on the subsequent days)
// 		if (i !== prices.length - 1) {
// 			for (let j = i + 1; j < prices.length; j++) {
// 				profits.push(prices[j] - prices[i]);
// 			}
// 		}

// 		// update the profitMap
// 		profitMap.push(profits);

// 		// reset the cache of profits
// 		profits = [];
// 	}


// 	// Edge Cases
// 	const pricesCopy = prices.slice(0, prices[prices.length]);

// 	// if sorted array descending, then return 0
// 	const pricesCopyDescending = pricesCopy.sort(function (a, b) {
// 		return b - a;
// 	})
// 	if (JSON.stringify(prices) == JSON.stringify(pricesCopyDescending)) {
// 		return 0;
// 	}

// 	// if sorted array ascending, then buy 0 index, sell last index
// 	const pricesCopyAscending = pricesCopy.sort(function (a, b) {
// 		return a - b;
// 	})
// 	if (JSON.stringify(prices) == JSON.stringify(pricesCopyAscending)) {
// 		return prices[prices.length - 1] - prices[0];
// 	}


// 	// General Case
// 	// loop through profitMap
// 	return profitMap.reduce((acc, profitSet) => {
// 		if (profitSet[0] > 0) {
// 			acc += profitSet[0];
// 		}
// 		return acc;
// 	}, 0);
// };




// >>>>> ///// >>>>>>>> SOLUTION ATTEMPT #2
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
// 	// create a profit map where { index of day you are buying: [array of profits from selling in subsequent days]}
// 	const profitMap = [];

// 	// loop through the array
// 	for (let i = 0; i < prices.length - 1; i++) {
// 		// cache the profits
// 		let profits = [];

// 		// if not the last day, loop through the rest of the array to calculate the profit (buying on current day i, selling on the subsequent days)
// 		if (i !== prices.length - 1) {
// 			for (let j = i + 1; j < prices.length; j++) {
// 				profits.push(prices[j] - prices[i]);
// 			}
// 		}

// 		// update the profitMap
// 		profitMap.push(profits);

// 		// reset the cache of profits
// 		profits = [];
// 	}

// 	// General Case
// 	// loop through profitMap
// 	return profitMap.reduce((acc, profitSet) => {
// 		if (profitSet[0] > 0) {
// 			acc += profitSet[0];
// 		}
// 		return acc;
// 	}, 0);
// };