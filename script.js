
//Needs:
//The input if loop should be able to take more than just "Yes"
//A way to buy multiple quantities of the same item like 2 x Apples (then return total price of cart)


//Current problem: price of item gets parsed from string to int and then added to global var totalCost
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

var secondOrder;
foodCart = [];
//var totalCost;

function foodOrder(item, price, quantity) {
	this.item = item;
	this.price = price;
	//this.quantity = quantity;
	this.print = function() {
		console.log(this.item + ' : ' + this.price);
	};
	var question = prompt(
		'Did you order an ' + this.item + ' for $' + this.price + '? (answer Yes or No)');
	if (question === 'Yes') {
		console.log('Order approved!');
		console.log(this.item + ' was ordered for $' + this.price + '!');
			foodCart.push({ name: item, cost: price });
			//parseInt(price);
			//totalCost = totalCost + price;
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


console.log(foodCart);
//console.log(totalCost);
