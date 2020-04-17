// Valid Parenthesis String
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].


/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	let low = 0;
	let high = 0;
	
	for (let i = 0; i < s.length; i++) {
			if (s[i] === '(') {
					low++;
			} else {
					low--;
			}
			
			if (s[i] !== ')') {
					high++;
			} else {
					high--;
			}
			
			if (high < 0) {
					break;
			}
			
			low = Math.max(low, 0);
	}
	
	return low === 0;
	
};


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
// 	// Keep a cache of current open parantheses

// 	const countOfOpenParens = s.replace(/[^\(]/g, '').length;
// 	console.log(countOfOpenParens, 'countOfOpenParens');

// 	const countOfClosedParens = s.replace(/[^\)]/g, '').length;
// 	console.log(countOfClosedParens, 'countOfClosedParens');

// 	const countOfAsterisks = s.replace(/[^\*]/g, '').length;
// 	console.log(countOfAsterisks, 'countOfAsterisks');
	
// 	let allowedUsesOfAsterisks = countOfOpenParens === countOfClosedParens ? 0 : Math.abs(countOfOpenParens - countOfClosedParens);
// 	console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks');
	
// 	// EDGE CASE: Not enough asterisks
// 	if (allowedUsesOfAsterisks > countOfAsterisks) {
// 			return false;
// 	}
	
// 	const characterMap = {
// 			'(': [],
// 			')': [],
// 			'*': []
// 	};
	
// 	// Iterate through each character of the string
// 	for (let i = 0; i < s.length; i++) {
// 			if (s[i] === '(') {
// 					characterMap['('].push(i);
// 			}
			
// 			if (s[i] === ')') {
// 					characterMap[')'].push(i);
					
// 					if (characterMap['('].length === 0 && characterMap['*'].length === 0) {
// 							return false;
// 					} else {
// 							characterMap['('].pop();
// 					}
// 			}
			
// 			if (s[i] === '*') {
// 					characterMap['*'].push(i);
// 					// if (countOfOpenParens === countOfClosedParens) {
// 					//     continue
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens < countOfClosedParens) {
// 					//     openParentheses.push(s[i]);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining A');
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens > countOfClosedParens) {
// 					//     openParentheses.pop();
// 					//     console.log(openParentheses);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining B');
// 					// }
// 			}
// 	}
	
// 	console.log(characterMap, 'characterMap before');
	
// 	// const characterMapOpenParensClone = characterMap['('].slice(0);
// 	// console.log(characterMapOpenParensClone, 'characterMapOpenParensClone');
	
// 	for (let j = characterMap['('].length - 1; j >= 0; j--) {
// 			for (let k = 0; k < characterMap['*'].length; k++) {
// 					if (characterMap['*'][k] > characterMap['('][j]) {
// 							characterMap['('].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	for (let j = characterMap[')'].length - 1; j >= 0; j--) {
// 			for (let k = characterMap['*'].length - 1; k >= 0 ; k--) {
// 					if (characterMap['*'][k] < characterMap['('][j]) {
// 							characterMap[')'].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	console.log(characterMap, 'characterMap after');
	
// 	// Return the validity of the string
// 	return characterMap['('].length === 0;
// };


// Failing Test Case
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
// 	// Keep a cache of current open parantheses
// 	const openParentheses = [];
	
// 	console.log(s.replace(/[^\(]/g, ''), 's.replace');
// 	const countOfOpenParens = s.replace(/[^\(]/g, '').length;
// 	console.log(countOfOpenParens, 'countOfOpenParens');
	
// 	console.log(s.replace(/[^\)]/g, ''), 's.replace');
// 	const countOfClosedParens = s.replace(/[^\)]/g, '').length;
// 	console.log(countOfClosedParens, 'countOfClosedParens');
	
// 	console.log(s.replace(/[^\*]/g, ''), 's.replace');
// 	const countOfAsterisks = s.replace(/[^\*]/g, '').length;
// 	console.log(countOfAsterisks, 'countOfAsterisks');
	
// 	// Iterate through each character of the string
// 	for (let i = 0; i < s.length; i++) {
// 			if (s[i] === '(') {
// 					openParentheses.push(s[i]);
// 			}
			
// 			if (s[i] === ')') {
// 					if (openParentheses.length === 0) {
// 							return false;
// 					} else {
// 							openParentheses.pop();
// 							console.log(openParentheses);
// 					}
// 			}
			
// 			if (s[i] === '*') {
// 					if (countOfOpenParens === countOfClosedParens) {
// 							continue
// 					} else if (countOfOpenParens < countOfClosedParens) {
// 							openParentheses.push(s[i]);
// 					} else if (countOfOpenParens > countOfClosedParens) {
// 							openParentheses.pop();
// 							console.log(openParentheses);
// 					}
// 			}
// 	}
	
// 	// Return the validity of the string
// 	return openParentheses.length === 0;
// };




// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
// 	// Keep a cache of current open parantheses
// 	const openParentheses = [];
	
// 	console.log(s.replace(/[^\(]/g, ''), 's.replace');
// 	const countOfOpenParens = s.replace(/[^\(]/g, '').length;
// 	console.log(countOfOpenParens, 'countOfOpenParens');
	
// 	console.log(s.replace(/[^\)]/g, ''), 's.replace');
// 	const countOfClosedParens = s.replace(/[^\)]/g, '').length;
// 	console.log(countOfClosedParens, 'countOfClosedParens');
	
// 	console.log(s.replace(/[^\*]/g, ''), 's.replace');
// 	const countOfAsterisks = s.replace(/[^\*]/g, '').length;
// 	console.log(countOfAsterisks, 'countOfAsterisks');
	
// 	let allowedUsesOfAsterisks = countOfOpenParens === countOfClosedParens ? 0 : Math.abs(countOfOpenParens - countOfClosedParens);
// 	console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks');
				
// 	// Iterate through each character of the string
// 	for (let i = 0; i < s.length; i++) {
// 			if (s[i] === '(') {
// 					openParentheses.push(s[i]);
// 			}
			
// 			if (s[i] === ')') {
// 					if (openParentheses.length === 0) {
// 							return false;
// 					} else {
// 							openParentheses.pop();
// 							console.log(openParentheses);
// 					}
// 			}
			
// 			if (s[i] === '*') {
// 					if (countOfOpenParens === countOfClosedParens) {
// 							continue
// 					} else if (countOfOpenParens < countOfClosedParens && allowedUsesOfAsterisks) {
// 							openParentheses.push(s[i]);
// 							allowedUsesOfAsterisks--;
// 							console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining');
// 					} else if (countOfOpenParens > countOfClosedParens && allowedUsesOfAsterisks) {
// 							openParentheses.pop();
// 							console.log(openParentheses);
// 							allowedUsesOfAsterisks--;
// 							console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining');
// 					}
// 			}
// 	}
	
// 	// Return the validity of the string
// 	return openParentheses.length === 0;
// };


// Test Cases
// "((()))()(())(*()()())**(())()()()()((*()*))((*()*)"
// "(((((()*)(*)*))())())(()())())))((**)))))(()())()"

// "(*())))()))))(()))))))(((())()())()*())))(((**)*()(()())(*)))(()*(*(())(())(()()())(()()*)((*()*))"
// 38 'countOfOpenParens'
// 49 'countOfClosedParens'
// 11 'countOfAsterisks'
// 11 'allowedUsesOfAsterisks'
// { '(': [ 61, 65 ],
//   ')':
//    [ 3,
//      4,
//      5,
//      6,
//      8,
//      9,
//      10,
//      11,
//      12,
//      15,
//      16,
//      17,
//      18,
//      19,
//      20,
//      21,
//      26,
//      27,
//      29,
//      31,
//      32,
//      34,
//      37,
//      38,
//      39,
//      40,
//      46,
//      49,
//      52,
//      54,
//      55,
//      58,
//      59,
//      60,
//      63,
//      69,
//      70,
//      73,
//      74,
//      77,
//      79,
//      81,
//      82,
//      85,
//      87,
//      89,
//      94,
//      96,
//      97 ],
//   '*': [ 1, 35, 44, 45, 47, 57, 64, 66, 88, 92, 95 ] } 'characterMap before'
// { '(': [],
//   ')':
//    [ 3,
//      4,
//      5,
//      6,
//      8,
//      9,
//      10,
//      11,
//      12,
//      15,
//      16,
//      17,
//      18,
//      19,
//      20,
//      21,
//      26,
//      27,
//      29,
//      31,
//      32,
//      34,
//      37,
//      38,
//      39,
//      40,
//      46,
//      49,
//      52,
//      54,
//      55,
//      58,
//      59,
//      60,
//      63,
//      69,
//      70,
//      73,
//      74,
//      77,
//      79,
//      81,
//      82,
//      85,
//      87,
//      89,
//      94,
//      96,
//      97 ],
//   '*': [ 1, 35, 44, 45, 47, 57, 88, 92, 95 ] } 'characterMap after'


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
// 	// Keep a cache of current open parantheses

// 	const countOfOpenParens = s.replace(/[^\(]/g, '').length;
// 	console.log(countOfOpenParens, 'countOfOpenParens');

// 	const countOfClosedParens = s.replace(/[^\)]/g, '').length;
// 	console.log(countOfClosedParens, 'countOfClosedParens');

// 	const countOfAsterisks = s.replace(/[^\*]/g, '').length;
// 	console.log(countOfAsterisks, 'countOfAsterisks');
	
// 	let allowedUsesOfAsterisks = countOfOpenParens === countOfClosedParens ? 0 : Math.abs(countOfOpenParens - countOfClosedParens);
// 	console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks');
	
// 	// EDGE CASE: Not enough asterisks
// 	if (allowedUsesOfAsterisks > countOfAsterisks) {
// 			return false;
// 	}
	
// 	const characterMap = {
// 			'(': [],
// 			')': [],
// 			'*': []
// 	};
	
// 	// Iterate through each character of the string
// 	for (let i = 0; i < s.length; i++) {
// 			if (s[i] === '(') {
// 					characterMap['('].push(i);
// 			}
			
// 			if (s[i] === ')') {
// 					characterMap[')'].push(i);
					
// 					if ((characterMap['('].length === 0 && characterMap['*'].length === 0) || (characterMap[')'].length > characterMap['('].length + characterMap['*'].length)) {
// 							return false;
// 					} else {
// 							characterMap['('].pop();
// 					}
// 			}
			
// 			if (s[i] === '*') {
// 					characterMap['*'].push(i);
// 					// if (countOfOpenParens === countOfClosedParens) {
// 					//     continue
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens < countOfClosedParens) {
// 					//     openParentheses.push(s[i]);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining A');
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens > countOfClosedParens) {
// 					//     openParentheses.pop();
// 					//     console.log(openParentheses);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining B');
// 					// }
// 			}
// 	}
	
// 	console.log(characterMap, 'characterMap before');
	
// 	// const characterMapOpenParensClone = characterMap['('].slice(0);
// 	// console.log(characterMapOpenParensClone, 'characterMapOpenParensClone');
	
// 	for (let j = characterMap['('].length - 1; j >= 0; j--) {
// 			for (let k = 0; k < characterMap['*'].length; k++) {
// 					if (characterMap['*'][k] > characterMap['('][j]) {
// 							characterMap['('].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	for (let j = characterMap[')'].length - 1; j >= 0; j--) {
// 			for (let k = characterMap['*'].length - 1; k >= 0 ; k--) {
// 					if (characterMap['*'][k] < characterMap['('][j]) {
// 							characterMap[')'].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	console.log(characterMap, 'characterMap after');
	
// 	// Return the validity of the string
// 	return characterMap['('].length === 0;
// };


// // CURRENT PLACEHOLDER SOLUTION
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var checkValidString = function(s) {
// 	// Keep a cache of current open parantheses

// 	const countOfOpenParens = s.replace(/[^\(]/g, '').length;
// 	console.log(countOfOpenParens, 'countOfOpenParens');

// 	const countOfClosedParens = s.replace(/[^\)]/g, '').length;
// 	console.log(countOfClosedParens, 'countOfClosedParens');

// 	const countOfAsterisks = s.replace(/[^\*]/g, '').length;
// 	console.log(countOfAsterisks, 'countOfAsterisks');
	
// 	let allowedUsesOfAsterisks = countOfOpenParens === countOfClosedParens ? 0 : Math.abs(countOfOpenParens - countOfClosedParens);
// 	console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks');
	
// 	// EDGE CASE: Not enough asterisks
// 	if (allowedUsesOfAsterisks > countOfAsterisks) {
// 			return false;
// 	}
	
// 	const characterMap = {
// 			'(': [],
// 			')': [],
// 			'*': []
// 	};
	
// 	const poppedOpenParens = [];
// 	const usedClosedParens = [];
	
// 	// Iterate through each character of the string
// 	for (let i = 0; i < s.length; i++) {
// 			if (s[i] === '(') {
// 					characterMap['('].push(i);
// 			}
			
// 			if (s[i] === ')') {
// 					characterMap[')'].push(i);
					
// 					if ((characterMap['('].length === 0 && characterMap['*'].length === 0) || (characterMap[')'].length > (characterMap['('].length + characterMap['*'].length))) {
// 							console.log(characterMap[')'].length > (characterMap['('].length + characterMap['*'].length), 'CONDITIONAL CHECK', characterMap);
// 							return false;
// 					} else {
// 							poppedOpenParens.push(characterMap['('].pop());
// 							usedClosedParens.push(characterMap[')'].pop());
// 							console.log(usedClosedParens);
// 							// usedClosedParens.push(characterMap[')'][characterMap[')'].length - 1]);
// 					}
// 			}
			
// 			if (s[i] === '*') {
// 					characterMap['*'].push(i);
// 					// if (countOfOpenParens === countOfClosedParens) {
// 					//     continue
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens < countOfClosedParens) {
// 					//     openParentheses.push(s[i]);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining A');
// 					// } else if (allowedUsesOfAsterisks && countOfOpenParens > countOfClosedParens) {
// 					//     openParentheses.pop();
// 					//     console.log(openParentheses);
// 					//     allowedUsesOfAsterisks--;
// 					//     console.log(allowedUsesOfAsterisks, 'allowedUsesOfAsterisks remaining B');
// 					// }
// 			}
// 	}
	
// 	console.log(characterMap, 'characterMap before');
	
// 	// const characterMapOpenParensClone = characterMap['('].slice(0);
// 	// console.log(characterMapOpenParensClone, 'characterMapOpenParensClone');
	
// 	for (let j = characterMap['('].length - 1; j >= 0; j--) {
// 			for (let k = 0; k < characterMap['*'].length; k++) {
// 					if (characterMap['*'][k] > characterMap['('][j]) {
// 							characterMap['('].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	for (let j = characterMap[')'].length - 1; j >= 0; j--) {
// 			for (let k = characterMap['*'].length - 1; k >= 0 ; k--) {
// 					if (characterMap['*'][k] < characterMap['('][j]) {
// 							characterMap[')'].splice(j, 1);
// 							characterMap['*'].splice(k, 1);
// 							break;
// 					}
// 			}
// 			// if (!characterMap['*'].some( characterIndex => {
// 			//     return characterIndex > characterMap['('][j];
// 			// })) {
// 			//     return false;
// 			// }
// 	}
	
// 	console.log(characterMap, 'characterMap after');
	
// 	// Return the validity of the string
// 	return characterMap['('].length  === 0;
// };