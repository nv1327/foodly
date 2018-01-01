//Needs:
//The input if loop should be able to take more than just "Yes"
//A way to buy multiple quantities of the same item like 2 x Apples (then return total price of cart)

//Finished issues/needs:
//A way to place infinite orders *finished!*
//implement a dictionary to keep records of food bought *finished - array that stores terms as mini dictionaries*

//To make this a Node.js sketch: https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input/

var secondOrder;
foodCart = [];

function foodOrder(item, price) {
	//secondOrder = "Yes";
	this.item = item;
	this.price = price;
	this.print = function() {
		console.log(this.item + ' : ' + this.price);
	};
	var question = prompt(
		'Did you order an ' + this.item + ' for $' + this.price + '? (answer Yes or No)');
	if (question === 'Yes') {
		console.log('Order approved!');
		console.log(this.item + ' was ordered for $' + this.price + '!');
		foodCart.push({ name: item, cost: price });
	} else {
		console.log('Order canceled!');
		console.log(this.item + ' was not ordered!');
		var continued = prompt('Would you like to continue?');
		if (continued === 'Yes') {
			console.log('The rest of your order will be processed!');
			console.log('...');
			console.log('...');
			console.log('...');
		} else {
			console.log('Your whole order was terminated.');
			throw 'exit';
			//Exit loop here
		}
	}
}

var newFood = prompt('What would you like to order?');
var newPrice = prompt('How much does it cost?');

foodOrder(newFood, newPrice);

if (foodOrder) {
	secondOrder = prompt('Would you like to place another order?');
	if (secondOrder === 'Yes') {
		var newFood = prompt('What would you like to order?');
		var newPrice = prompt('How much does it cost?');
		secondOrder = 'No';
		foodOrder(newFood, newPrice);
		resetOrder();
	} else {
		console.log('Thanks for shopping!');
	}
}

function resetOrder() {
	if (foodOrder) {
	secondOrder = prompt('Would you like to place another order?');
	if (secondOrder === 'Yes') {
		var newFood = prompt('What would you like to order?');
		var newPrice = prompt('How much does it cost?');
		secondOrder = 'No';
		foodOrder(newFood, newPrice);
		resetSecondOrder();
	} else {
		console.log('Thanks for shopping!');
	}
 }
}

function resetSecondOrder() {
		if (foodOrder) {
	secondOrder = prompt('Would you like to place another order?');
	if (secondOrder === 'Yes') {
		var newFood = prompt('What would you like to order?');
		var newPrice = prompt('How much does it cost?');
		secondOrder = 'No';
		foodOrder(newFood, newPrice);
		resetOrder();
	} else {
		console.log('Thanks for shopping!');
	}
 }
}

console.log(" ");
console.log(" ");
console.log("Your cart looks like...");
console.log(foodCart);
//console.log(foodCart[0]); --> having an array makes it really easy to call individual elements in the cart
