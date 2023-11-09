/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	// 	if (word1 != "")
	// 		return word1.length
	// 	else if (+(word1) > 0)
	// 		return -1
	///Your code Ends here
	if (typeof(word1) === "string") {
		return word1.length;
	}
	return -1;
}
/*
Lines For TestCase
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/