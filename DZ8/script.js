
'us strict';


//1 Создать объект car с набором свойств по желанию. Вывести в цикле все ключи и значения объекта.


const car = {
	x: 'citroen',
	y: 'c5'
};

for (let auto in car) {
	console.log(`kay: ${auto}`);
	console.log(`value: ${car[auto]}`);
}


//2 Создать объект user с свойствами name, email, phone, id. Скопировать этот объект со всеми свойствами в новую переменную newUser.


const user = {
	name: 'Evgen',
	email: '@Evgen.mail.ru',
	phone: 'Iphone',
	id: 'Kazak'
};

const newUser = {};
Object.assign(newUser, user);
console.log(newUser);

//3 Создать объект circle со свойствами: radius, color. 
// Также создать в объекте метод   calculateCircumference(), при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).


const circle = {
	radius: 15,
	color: 'red',
	calculateCircumference() {
		let lengthCircles = (2 * Math.PI) * this.radius;
		console.log(lengthCircles);
	}
};

circle.calculateCircumference();


//4 Создать объект message с полем text и методами: setMessage(string), showMessage(). При вызове метода getMessage в поле text записывается переданная в качестве аргумента строка. При вызове метода showMessage() вызывается alert() с содержимым поля text 


const message = {
	text: '',
	setMessage(string) {
		this.text = string;
	},
	showMessage() {
		alert(this.text);
	},

};

message.setMessage('hello');
message.showMessage();



// 5 Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) и методом getArea(), который возвращает площадь

const rectangle = {
	height: 2,
	width: 4,
	getArea() {
		let area = (this.height * this.width);
		console.log(area);
	}
};

rectangle.getArea();


//6 Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. 

let anyObj = {};

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}


console.log(isEmpty(anyObj));


//7 Создать объект selfGeneratedUser с методами: 
// 1) getInfo(), при вызове которого мы через prompt() поочередно получим данные об имени (name), емейле (email) и телефоне (phone) пользователя и запишем их в соответствующие свойства объекта. 
// 2) introduce(), при вызове которого мы поочередно выводим c помощью alert name, email и phone. Если поля нет - не выводим его, переходим к другому полю.



const selfGeneratedUser = {

	getInfo() {
		let name = prompt('your name', '');
		let email = prompt('your email', '');
		let phone = prompt('your phone', '');
		let arr = [name, email, phone];
		return arr;
	},
	introduce() {
		alert(this.username);
		alert(this.email);
		alert(this.phone);
	},
	username: '',
	email: '',
	phone: ''
};

let arr2 = selfGeneratedUser.getInfo();

selfGeneratedUser.username = arr2[0];
selfGeneratedUser.email = arr2[1];
selfGeneratedUser.phone = arr2[2];

selfGeneratedUser.introduce();
console.log(selfGeneratedUser);






let iterable = [10, 20, 30];
for (let value of iterable) {
	value += 1;
	console.log(value);
}


// Объекты(продолжение)
//1 Создать  произвольный массив и пройти по нему с помощью цикла for .. of 

let newArr = [1, 2, 3, 4, 5, 6];
for (let value of newArr) {
	console.log(value);
}



//2 Существует ul список на странице. Получить все текстовые значения элементов списка. Создать из них массив и к каждому элементу массива добавить его порядковый номер. Вывести полученный массив


let elements = document.querySelectorAll('li');

let arrMenuList = Array.from(elements);
for (let i = 0; i < arrMenuList.length; i++) {
	console.log(`${i} ${arrMenuList[i].innerHTML} `);
}




//3 Есть объект prices с произвольным количеством свойств, содержащих цены продуктов.
// Напишите функцию sumPrices(prices), которая возвращает сумму всех цен с помощью метода Object.values


const prices = {
	orange: 5,
	banana: 2,
	kiwi: 4,
};


function sumPrices(prices) {
	let fruits = Object.values(prices);
	let pricesfruits = fruits.reduce((sum, current) => sum + current, 0);
	console.log(pricesfruits);
}
sumPrices(prices);

// 4 Присвоить каждое свойство объекта к отдельной переменной 

let product = {
	name: "John",
	price: 30,
	sold: false
};
let { name: myName, price: cost, sold: boolean } = product;
console.log(myName, cost, boolean);



// 5 Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, а остальные значения сложить 
let arr5 = ['Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11];

let [yourName, surname, ...rest] = arr5;
let sumRest = rest.reduce((sum, current) => sum + current, 0);
console.log(yourName, surname, sumRest);


//6 Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд

function printMessage(n) {
	console.log(n);
}

let id2 = setInterval(() => {
	printMessage('hi');
}, 1000);

//7 Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”
let id3 = setInterval(() => {
	console.log('прошло 5 секунд');
}, 5000);


// 8 Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
function printNumbers(from, to) {
	let num = 0;
	let id4 = setInterval(() => {
		num++;
		console.log(num);
	}, from);

	setTimeout(() => {
		console.log('finish');
		clearInterval(id4);
	}, to);

}

printNumbers(1000, 5000);

// 9 По нажатию на кнопку показывать сообщение через 5 секунд, во время этих 5 секунд должно появляться слово “loading”, а после появления сообщения - скрываться

let btn = document.querySelector('.btn');
let message1 = document.querySelector('.message');


btn.addEventListener('click', function () {

	let id4 = setInterval(() => {
		btn.innerHTML = 'loading';
	}, 0);

	setTimeout(() => {

		clearInterval(id4);
		btn.style.display = 'none';
		message1.style.display = 'block';
	}, 5000);

});