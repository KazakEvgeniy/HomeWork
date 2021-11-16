//1 Создайте массив, длиной в 6 элементов, каждый из  которого больше предыдущего на 5, после этого найдите среднее значение из этих чисел.

let arr1 = [];

for (let i = 0; i < 6; i++) {
	arr1[i] = i * 5;
}
let result = arr1.reduce((sum, item) => sum + item, 0);
let averageValue = result / arr1.length;
console.log(averageValue);


//2 Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?

let elemArr = [2, 5, 6, 4, 'string', [2], { a: 2 }];
let lastElem = elemArr.pop();
console.log(lastElem);


// 3 Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.

let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(-2, 1, 'предпоследний элемент');
console.log(arr3);


// 4 Создайте массив styles с элементами «Джаз», «Блюз».Добавьте в конец значение «Рок-н-Ролл»Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.Удалите первое значение массива и выведите его alert.Добавьте в начало значения «Рэп» и «Регги».

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles.push('Рок-н-Ролл');
styles.splice(-2, 1, 'Классика');
alert(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);


// 5 Существует массив из какого-то количества элементов строковых данных. Необходимо создать новый массив из длин каждого из элементов исходного массива.


let arr5 = ['дом', 'стол', 'дерево'];
let newArray = [];

for (let i = 0; i < arr5.length; i++) {
	let length = arr5[i].length;
	newArray[i] = length;
}
console.log(newArray);




// 6
// Существует цикл for,  который перебирает массив со строковыми и числовыми  данными[“Anna”, 12, “Sam”, 9,  “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:


let newArray3 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];

newArray3.forEach(function (item) {
	if (typeof (item) === 'string') {
		console.log(item + '-string value');
	} else {
		console.log(item + '-number value');
	}
});



// // 7.
// Существует массив  [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] . Необходимо создать новый массив из значений данного, которые больше 10.


const oldarray = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];

const newArray2 = oldarray.filter(function (item) {

	return item > 10;

});

console.log(newArray2);



// 8.
// Напишите код который:
// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.Заканчивает ввод, как только посетитель введёт 15.При этом ноль 0 не должен заканчивать ввод, это разрешённое число.Выводит сумму всех значений массива




const answer = [];
let x,
	sum = 0;


while (x != 15) {
	x = +prompt('введите значение', '');
	answer.push(x);

}

if (x == 15) {
	answer.pop();
	for (let index = 0; index < answer.length; index++) {
		sum += answer[index];
	}

	alert(`сумма чисел: ${sum}`);

}

// 9 Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов:
// min(2, 5)
// min(3, -1)
// min(1, 1) 


function min(a, b) {
	if (a > b) {
		console.log(b);
	} else if (a < b) {
		console.log(a);
	}
}
min(5, 2);

// 10' Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow1(x, n) {
	let y = x;
	while (n > 1) {
		x = x * y;
		n--;
	}
	console.log(x);
}

pow1(3, 3);

function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	console.log(result);
}
pow(2, 4);
// 11' Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.
// isEven(4); // true
// isEven(5); // false


function isEven(n) {
	if (n % 2 === 0) {
		console.log(true);
	} else {
		console.log(false);
	}
}

isEven(5);



//12  Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки, которая передается в параметр, и возвращает новую строку без этих символов.
function deleteChars(str) {
	let newArr12 = str.split('');
	newArr12.shift();
	newArr12.pop();
	let newStr = newArr12.join('');
	console.log(newStr);
}

deleteChars('javaScript');


// 13 Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж, и нет 13-го этажа (суеверия).

// Напишите функцию convertFloor(floor), которая получает американский этаж (передается как целое число), и возвращает реальный.
// Кроме того, ваша функция должна работать и на подвальных этажах.
// convertFloor(-1) // -1
// convertFloor(2) // 3
// convertFloor(2) // 3
// convertFloor(0) // 1
// convertFloor(12) // 13
// convertFloor(14) // 14

const convertFloor = (floor) => {

	if (floor < 0) {
		return floor;
	}
	else if (floor >= 13) {
		return floor;
	}
	else {
		return floor + 1;
	}
};

console.log(convertFloor(-1));
console.log(convertFloor(2));
console.log(convertFloor(0));
console.log(convertFloor(12));
console.log(convertFloor(14));




// 14' Перепишите функцию
// заменив if else на конструкцию switch (convertType1)
// через Function Expression (convertType2)
// с помощью стрелочного синтаксиса (convertType3)

function convertType(value, toType) {
	if (toType === 'boolean') {
		return Boolean(value);
	} else if (toType === 'streeng') {
		return String(value);
	}
	else if (toType === 'number') {
		return Number(value);
	}
}

console.log(convertType('my string', 'boolean'));




function convertType1(value, toType) {
	let result;

	switch (toType) {
		case 'boolean':
			result = Boolean(value);

			break;
		case 'string':
			result = String(value);
			break;
		case 'number':
			result = Number(value);
			break;
	}
	return result;
}

console.log(convertType1('my string', 'boolean'));





let convertType2 = function (value, toType) {
	let result;

	switch (toType) {
		case 'boolean':
			result = Boolean(value);

			break;
		case 'string':
			result = String(value);
			break;
		case 'number':
			result = Number(value);
			break;
	}
	return result;
}

console.log(convertType2('my string', 'boolean'));




let convertType3 = (value, toType) => {
	let result;

	switch (toType) {
		case 'boolean':
			result = Boolean(value);

			break;
		case 'string':
			result = String(value);
			break;
		case 'number':
			result = Number(value);
			break;
	}
	return result;
}

console.log(convertType3('my string', 'boolean'));





//15' Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

// arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять между собой местами (fpos и clfw нужно поменять местами)
//  adding - строка, которую необходимо дописать в конец к каждому элементу массива 

// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]


let arr15 = ['volf', 'fox', 'lion', 'leopard'];
function transformArray(arr, index1, index2, adding) {

	let x1 = arr[index1];
	let x2 = arr[index2];
	arr.splice(index1, 1, x2);
	arr.splice(index2, 1, x1);
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		arr[i] += adding;
	}
	console.log(arr);
}

transformArray(arr15, 0, 2, 'ing');


// 16' Нужно написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,  пока не останется одна цифра, вот так:
let arr16 = [];
let arrSm = [];
function digitalRoot(numb) {
	let str = numb += '';

	let newArr16 = str.split('');
	for (let i = 0; i < newArr16.length; i++) {
		arr16[i] = Number(newArr16[i]);
	}
	let sum = arr16.reduce((sum, item) => sum + item, 0);
	sum += '';
	let sumArr = sum.split('');

	if (sumArr.length !== 1) {
		for (let i = 0; i < sumArr.length; i++) {
			arrSm[i] = Number(sumArr[i]);

		}

	}
	let sum2 = arrSm.reduce((sum, item) => sum + item, 0);
	console.log(sum2);

}

digitalRoot(87658);

