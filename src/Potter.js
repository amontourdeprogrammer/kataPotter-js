
var bookPrice = 8;
function countNbItemBasket (books) {

	if ((books.length > 1) && (books[0]!=books[1])) {
		return books.length*bookPrice*0.95 }
	else {
		return books.length*bookPrice}

}
