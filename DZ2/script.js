// Чему равны вычисленные значения в каждой строке?


let x1 = '' + 1 + 0;
// 10
let x2 = '' - 1 + 0;
// -1
let x3 = true + false;
// 1
let x4 = 6 / '3';
// 2
let x5 = '6' * '3';
// 18
let x6 = 4 + 5 + 'px';
// '9px'
let x7 = '$' + 4 + 5;
// $45
let x8 = '4' - 2;
// 2
let x9 = '4px' - 2;
// NaN
let x10 = 7 / 0;
// Infinity
let x11 = '-9' + 5;
// '-95'
let x12 = '-9' - 5;
// -14
let x13 = null + 1;
// 1
let x14 = undefined + 1;
// NaN
let x15 = '\t\n' - 2;
console.log(x15);




// 1)	Вывести в консоль через цикл while значения от 0 до 50 включительно

let num = -1;

while (num < 50) {
	num++;
	console.log(num);

}


// 2)	Вывести в консоль только четные числа в диапазоне от 0 до 100, используя цикл for.

for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}



// 3)	Написать функцию, в которой необходимо сложить все числа массива из 20 элементов и вывести результат в alert

let numbers = [2, 4, 6, 10, 2, 12, 32, 15, 4, 6, 9, 8, 7, 5, 6, 9, 1, 5, 7, 14];

function arraySum(x) {
	let sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}
	console.log(sum);
}
arraySum(numbers);




// 4)	* Возвести 2 в 8 степень с помощью цикла while

function pow(a, b) {
	let result = a;
	let x = 1;
	while (x < b) {
		x++;
		result *= a;
	}
	console.log(result);
}

pow(2, 8);








//5 Напишите условие if для проверки, что переменная count НЕ находится в диапазоне между 10 и 25 включительно.

let counter = 8;

if (counter <= 10 && counter >= 25) {
	console.log('ok');
} else {
	console.log('error');
}


//6 Напишите код, который будет спрашивать пользователя пароль с помощью prompt и сохранять его в переменную, например,  password. Правильное значение пароля пусть хранится в переменной, например,  currentPassword.
// Если значение пароля введенное  пользователем совпадает с заданным паролем, выводить сообщение  с помощью alert - “Пароль верный”, если не совпадает - “Пароль не верный”, если пользователь нажал отмена или значение поля пароля пустое - “Отменено”.
// Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает null.


let password = +prompt('Введите пароль', '');
let currentPassword = 1111;

if (password === currentPassword) {
	alert('Пароль верный');
}
else if (password == null || password == '') {
	alert('Отмененно');
} else {
	alert('Пароль не верный');
}


let currentPassword2 = +prompt('password', '');

(currentPassword2 === 123) ? console.log('пароль верный') : (currentPassword2 == null || currentPassword2 == '') ?

	console.log('отменнено') : console.log('пароль не верный');


	//7 Вывести в консоль числа кратно 5 из диапазона 0 - 1000 используя цикл while


let i = 0;
while (i < 1000) {
	i++;
	if (i % 5 == 0) {
		console.log(i);
	}

}