/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	
	
	var d1 = (x2 - x1) * (x2 - x1)
	var d2 = (y2 - y1) * (y2 - y1)
	let tot = d1 + d2
	return parseInt(Math.sqrt(tot))
	
	///Your code Ends here
}
/*      d=√((x2 – x1)² + (y2 – y1)²).
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/