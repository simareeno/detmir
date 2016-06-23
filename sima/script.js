var initialArray = [ // массив
	{ // объект
		"title": "Юбочка с красными цветочками",
		"price": 2200,
		'img': '1'
	}, { // объект
		"title": "Синие джинсы",
		"price": 820,
		"oldPrice": 1320,
		'img': '2',
		"sale": '20%',
		"new": true
	}, { // объект
		"title": "Розовая юбочка",
		"price": 2350,
		'img': '3',
		"hit": true
	}, { // объект
		"title": "Голубая юбочка с тюлем",
		"price": 1750,
		'img': '4'
	}, { // объект
		"title": "Бирюзовая юбочка с принтом от Disney, Nickelodeon, маркая",
		"price": 900,
		'img': '5',
		'new': true,
		"exclusive": true
	}, { // объект
		"title": "Длинное платье с бабочками",
		"price": 5500,
		'img': '6'
	}, { // объект
		"title": "Платье в полосочку",
		"price": 1500,
		'img': '7',
		"hit": true
	}, { // объект
		"title": "Платье-костюм с кучей цветов",
		"price": 2150,
		"oldPrice": 2700,
		'img': '8'
	}, { // объект
		"title": "Розовая юбочка в кружочек",
		"price": 1950,
		'img': '9'
	}, { // объект
		"title": "Голубенькое мимими платьеце с розовой ленточкой",
		"price": 1350,
		'img': '10'
	}
];

function getDeclension(number, titles) {
	var cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

var arrayLength = initialArray.length;
var counter = $('.counter');
var word = getDeclension(arrayLength, ['товар', 'товара', 'товаров']);

counter.text(arrayLength + ' ' + word);

function show(array) {
  var source = $('.template').html();
  var template = Handlebars.compile(source);
  var html = template(array);
  $('.cards').html(html);
}

show(initialArray);
