
var bookPrice = 8;
function countNbItemBasket (books) {
	if (books.length > 1) {
		if (books[0]!=books[1]) {
			return books.length*bookPrice*0.95
		}
			else {return 16}
	} else if (books.length ==1) {
			return books.length*bookPrice
	} else {
		return books.length*bookPrice;
	}
}
// function countValueBasket (books) {
// 	console.log(books[0],books[1]);
// 	if (books[0]!=books[1]) {
// 		return 15.20
// 	}
// 	else {return 16}
// }
