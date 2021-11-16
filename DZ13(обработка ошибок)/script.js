
'use strict';

//1 Создайте метод find_index(arr, value), который принимает список(массив значений) и значение. Если значение не найдено в списке нужно сгенерировать ошибку. 



let fruits = ["lemon", "watermelon", "orange", "pear", "cherry"];
let fruit = 'banana';


try {
	let findindex = function (arr, value) {

		if (!arr.includes(value, 0)) {
			// throw ("there is no such fruit");
			throw new Error("there is no such fruit");

		}

		else {
			alert(fruit);
		}


	};
	findindex(fruits, fruit);

}

catch (error) {

	console.log(error);
	// console.log(error.message);

}


