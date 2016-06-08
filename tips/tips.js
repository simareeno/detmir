var fruit = 'арбуз';
var fruitPrice = 99.99;
var fruitTasty = true;
console.log(fruit);

function say(this) {
	console.log(this);
}
say('привет')

var body = $('body');
body.click(function () {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		say('арбуз')
	} else if (randomNumber > 0.33 && < 0.66) {
		say('яблоко')
	} else {
		say('груша')
	}
})

function double(number) {
	return number * 2;
}
var number = double(2);
double(number)

var fruits = ['арбуз', 'яблоко', 'груша']
console.log(fruits[0]);
console.log(fruits.length);

var fruit = {
	'name': 'арбуз',
	'price': 99.99,
	'tasty': true
}

var fruits = [
	{
		"name": "арбуз",
		"price": 99.99
	}, {
		"title": "яблоко",
		"price": 2500
	}, {
		"title": "груша",
		"price": 1950,
		"tasty": true
	}
];

fruits.forEach(function(item) {
	console.log(item);
});

for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
