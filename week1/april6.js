// Given an array of strings, group anagrams together.

// 	Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 	Output:
// [
// 	["ate", "eat", "tea"],
// 	["nat", "tan"],
// 	["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	// initialize anagramMap

	// loop through list of words

	// cache current word
	// split that string into an array of letters, sort the array, join letters back into a string

	// create a map where {sortedWord: [originalWord]}
	// if that sortedWord key already exists in the map, push the unsorted word into that key's array
	// if that sortedWord does NOT key already exists in the map, initialize the key: value pair and push the unsorted word into that key's array

	// return the reduced map to match the shape of the output in problem description
};