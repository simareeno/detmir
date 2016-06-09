// отображаем нужный массив
function show(array) {
	var template = $('#template').html(); // показываем где лежит шаблон
	var rendered = Mustache.render(template, array); // говорим как и что
	$('.items').html(rendered); // кладем в нужное место
}

// сортировка по цене
function sortByPrice(a, b) {
	console.log( "сравниваю " + a.price + " и " + b.price );
	return a.price - b.price;
}

// сортировка по имени
function sortByName(a, b){
	// console.log( "сравниваю " + a.title + " и " + b.title );
	if(a.title < b.title) return -1;
	if(a.title > b.title) return 1;
	return 0;
}

function filterBy(property, keyword, e) {
	return e.color === keyword;
}

$(document).ready(function () {
	show(initialArray); // сначала загружаем наш изначальный массив
	var changedArray = initialArray.slice(); // делаем копию

	// сортировка
	$('.select').change(function() {

		if ($(this).val() === 'name') {
			changedArray.sort(sortByName);
		} else if ($(this).val() === 'price') {
			changedArray.sort(sortByPrice);
		} else if($(this).val() === 'relevance') {
			show(initialArray);
			return false;
		}

		show(changedArray); // показываем измененный массив
	});

	// фильтр по цвету

	$('.color').change(function() {
		var changedArray = initialArray.slice(); // делаем копию

		if ($(this).val() === 'yellow') {
			changedArray = changedArray.filter(filterBy.bind(undefined, 'color', 'yellow'));
		} else if ($(this).val() === 'orange') {
			changedArray = changedArray.filter(filterBy.bind(undefined, 'color', 'orange'));
		} else if($(this).val() === 'color') {
			show(initialArray);
			return false;
		}

		show(changedArray); // показываем измененный массив
	});
});

// склонение
function getDeclension(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

// Количество товаров
function allItems() {
	var length = initialArray.length;
	var word = getDeclension(length, ['товар', 'товара', 'товаров']);
}

// наш изначальный массив
var initialArray = [
	{
		"title": "Яблоко",
		"price": 2200,
		'fruit': true,
		"color": 'green'
	}, {
		"title": "Банан",
		"price": 2500,
		"fruit": true,
		"color": 'yellow'
	}, {
		"title": "Морковка",
		"price": 1950,
		"fruit": false,
		"color": 'orange',
		"sale": 'item--sale'
	}
];
