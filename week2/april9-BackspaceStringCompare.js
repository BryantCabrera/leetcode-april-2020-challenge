// Backspace String Compare
// https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3291/

// Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.

// 	Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// 	Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// 	Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// 	Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// 	Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space ?


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
	// reconstruct the correct string, deleting as necessary 
	const cleanString = (currentString) => {
		while (/#/g.test(currentString)) {
			if (/^#/.test(currentString)) {
				currentString = currentString.replace(/(^#)/g, '');
			}

			currentString = currentString.replace(/([a-z]#)/g, '');
		}

		return currentString;
	};

	let currentStringS = cleanString(S);

	let currentStringT = cleanString(T);

	// compare both strings
	// if they are identical, return true
	// if they are not identical, return false
	return currentStringS === currentStringT;
};


// Possible Alternate Solution
// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
// var backspaceCompare = function (S, T) {
// 	// split the string into an array
// 	// reconstruct the correct string, deleting as necessary  
// 	const cleanedStringS = S.replace(/([a-z]#)/g, '');
// 	const cleanedStringT = T.replace(/([a-z]#)/g, '');


// 	// compare both strings
// 	if (cleanedStringS === cleanedStringT) {
// 		// if they are identical, return true
// 		return true;
// 	} else {
// 		// if they are not identical, return false
// 		return false;
// 	}
// };


// Unusted Code

    // const stringS = S.split('')

//     stringS.reduce( (acc, char, index) => {
//         if (char)
//         return acc += char;
//     }, '');

    // const pruneString = (stringArray) => {
    //     for (let i = stringArray.length - 1; i >= 0; i--) {
    //         if (stringArray[i] === '#' && i !== 0) {
    //             stringArray.slice(i - 1, 1);
    //         }
    //     }
		// }
		

// Prune a String
// const pruneString = (string) => {
// 	let prunedString = '';
// 	for (let i = 0; i < string.length; i++) {
// 		if ((i !== string.length - 1 && string[i + 1] === '#') || string[i] === '#') {
// 			continue;
// 		}

// 		prunedString += string[i];
// 	}
// 	return prunedString;
// }


// Unused Alternate Path
// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
// var backspaceCompare = function (S, T) {
// 	let currentStringS = S;
// 	let currentStringT = T;

// 	// reconstruct the correct string, deleting as necessary 
// 	const pruneString = (string) => {
// 		let prunedString = '';
// 		for (let i = 0; i < string.length; i++) {
// 			if ((i !== string.length - 1 && string[i + 1] === '#') || string[i] === '#') {
// 				continue;
// 			}

// 			prunedString += string[i];
// 			console.log(prunedString, 'prunedString after');
// 		}

// 		return prunedString;
// 	}

// 	while ((/.*[#]*.*/.test(currentStringS))) {
// 		console.log((/.*[#]*.*/g.test(currentStringS)), '(/.*[#]*.*/g.test(currentStringS))');
// 		currentStringS = pruneString(currentStringS);
// 	}

// 	console.log(currentStringS, 'currentStringS');
// 	// compare both strings
// 	// if they are identical, return true
// 	// else, return false
// };


// First version of accepted solution
// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
// var backspaceCompare = function (S, T) {
// 	// reconstruct the correct string, deleting as necessary 
// 	//     const cleanString = (string) => {

// 	//     };

// 	let currentStringS = S;
// 	while (/#/g.test(currentStringS)) {
// 		if (/^#/.test(currentStringS)) {
// 			currentStringS = currentStringS.replace(/(^#)/g, '');
// 		}
// 		currentStringS = currentStringS.replace(/([a-z]#)/g, '');
// 		console.log(currentStringS, 'currentStringS');
// 	}

// 	let currentStringT = T
// 	while (/#/g.test(currentStringT) && !/^[#]*$/.test(currentStringT)) {
// 		if (/^#/.test(currentStringT)) {
// 			currentStringT = currentStringT.replace(/(^#)/g, '');
// 		}
// 		currentStringT = currentStringT.replace(/([a-z]#)/g, '');
// 		console.log(currentStringT, 'currentStringT');
// 	}


// 	// compare both strings
// 	// if they are identical, return true
// 	// if they are not identical, return false
// 	return currentStringS === currentStringT;
// };