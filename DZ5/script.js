
// Задание 1 

// попробуем при помощи обработчика событий скрывать выпадающее меню при наведении на любой из элементов навигации (пункты меню).




let li = document.querySelectorAll('li');
let ul = document.querySelector('ul');


for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('mouseenter', () => {

		ul.style.display = 'none';
	});
}


// Задание 2

// Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.


let btnAdd = document.getElementById('add');
let btnRemove = document.getElementById('remove');


btnAdd.addEventListener('click', () => {
	let p = document.createElement('p');
	p.innerHTML = "Какой-либо текст";
	p.className = 'add';
	document.body.append(p);
});


btnRemove.addEventListener('click', () => {
	let collectionElem = document.querySelectorAll('p');
	let newArr = [];
	collectionElem.forEach(function (item) {
		newArr.push(item);
	});
	newArr.pop().remove();
});


// Задание 3

// Создание геометрических фигур

// Реализовать функцию drawFigure, которая принимает в качестве аргументов: название геометрической фигуры, цвет заливки, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W и тд

// Пример использования: drawFigure(‘круг’, ‘red’, 100, 200, 40); // рисует красный круг с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края 


const drawFigure = function (elem, color, top, left, size, height) {

	if (elem == 'круг') {
		let circle = document.createElement('div');
		circle.className = 'circle';
		document.body.prepend(circle);
		circle.style.backgroundColor = color;
		circle.style.position = 'absolute';
		circle.style.top = top + 'px';
		circle.style.left = left + 'px';
		circle.style.width = size + 'px';
		circle.style.height = size + 'px';
		circle.style.borderRadius = size + 'px';
	} else if (elem == 'квадрат') {
		let square = document.createElement('div');
		square.className = 'square';
		document.body.prepend(square);
		square.style.backgroundColor = color;
		square.style.position = 'absolute';
		square.style.top = top + 'px';
		square.style.left = left + 'px';
		square.style.width = size + 'px';
		square.style.height = size + 'px';

	} else if (elem == 'прямоугольник') {
		let rectangle = document.createElement('div');
		rectangle.className = 'rectangle';
		document.body.prepend(rectangle);
		rectangle.style.backgroundColor = color;
		rectangle.style.position = 'absolute';
		rectangle.style.top = top + 'px';
		rectangle.style.left = left + 'px';
		rectangle.style.width = size + 'px';
		rectangle.style.height = height + 'px';
	}



};

document.addEventListener('keydown', function (event) {
	if (event.key == 'c') {
		drawFigure('круг', 'green', 100, 200, 40);
	} else if (event.key == 's') {
		drawFigure('квадрат', 'red', 100, 300, 40);
	} else if (event.key == 'r') {
		drawFigure('прямоугольник', 'blue', 100, 400, 80, 40);
	}

});






