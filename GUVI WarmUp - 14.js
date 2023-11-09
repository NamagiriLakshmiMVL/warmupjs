/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	// 	if ((firstName != " ") && (lastName != " ")) {
	// 		return (firstName + " " + lastName)
	// 	} else if ((firstName != " ") && (lastName == "")) {
	// 		return (firstName)
	// 	} else {
	// 		return firstName
	// 	}
	///Your code Ends here
	let ans = '';
	if (firstName && firstName.length > 0) {
		ans += firstName;
	}
	if (lastName && lastName.length > 0) {
		ans = ans + " " + lastName;
	}
	return ans;
}
/*
Lines For TestCase
getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName("GEEK");
getFullName("", ""); 
*/