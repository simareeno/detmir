// отображаем нужный массив
function show(array) {
	var template = $('#template').html(); // показываем где лежит шаблон
	var rendered = Mustache.render(template, array); // говорим как и что
	$('.items').html(rendered); // кладем в нужное место
}

// сортировка по цене
function sortByPrice(a, b) {
	// console.log( "сравниваю " + a.price + " и " + b.price );
	return a.price - b.price;
}

// сортировка по имени
function sortByName(a, b){
	// console.log( "сравниваю " + a.title + " и " + b.title );
	if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
}

$(document).ready(function () {
	show(initialArray); // сначала загружаем наш изначальный массив
	var changedArray = initialArray.slice(); // делаем копию

	// сортировка
	$('.select').change(function(){

		if ($(this).val() == 'name') {
			changedArray.sort(sortByName);
		} else if ($(this).val() == 'price') {
			changedArray.sort(sortByPrice);
		} else if($(this).val() === 'relevance') {
			show(initialArray);
			return false;
		}

	show(changedArray); // показываем измененный массив
	});
});

// наш изначальный массив
var initialArray =
[
	{
		"title": "Яблоко",
		"price": 2200
	}, {
		"title": "Банан",
		"price": 2500
	}, {
		"title": "Морковка",
		"price": 1950,
		"sale": 'item--sale'
	}
];
