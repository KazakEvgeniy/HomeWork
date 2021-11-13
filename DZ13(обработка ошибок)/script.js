
'use strict';

// Создайте метод find_index(arr, value), который принимает список(массив значений) и значение. Если значение не найдено в списке нужно сгенерировать ошибку. 



let fruits = ["lemon", "watermelon", "orange", "pear", "cherry"];
let fruit = 'banana';


try {
	let findindex = function (arr, value) {

		if (!arr.includes(value, 0)) {
			console.log(y);
		} else {
			alert(value);
		}
	};
	findindex(fruits, fruit);

}

catch (error) {
	console.log(error.message = 'there is no such fruit');
}
