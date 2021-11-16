
'us strict';


//1 Создать функцию конструктор Dog, который наследует метод eat из объекта  animal

let animal = {
	eat() {
		console.log('food');
	}
};

function Dog() { };

let dog = new Dog();

dog.__proto__ = animal;

console.log(dog.eat());


//2Реализовать на основе прототипного наследования создание геометрических фигур (например, базовая функция фигура, от которой наследуются функции рисования круга, квадрата,  прямоугольника) - у фигур должны быть свойства цвета, размера, положения на странице, методы нарисовать 


// ...


// Реализовать на основе прототипного наследования создание модальных окон (например, базовая функция модальное окно, с методами показа и скрытия, от которого наследуются функции создания предупреждающего окна, запрещающего окна, окна с успешным выполнением )




let modal = {
	createModal() {
		let div = document.createElement('div');
		document.body.append(div);
		document.body.append(div);
		div.className = 'modal__wind';
		div.innerText = 'modal';
		div.style.width = '350px';
		div.style.height = '150px';
		div.style.textAlign = 'center';
		div.style.height = '150px';
		div.style.backgroundColor = 'rgba(105, 112, 89, 0.849)';
		div.style.position = 'fixed';
		div.style.top = '50%';
		div.style.left = '50%';
		div.style.transform = 'translate(-50%, -50%)';
		let btn1 = document.createElement('button');
		let btn2 = document.createElement('button');
		let modal__wind = document.querySelector('.modal__wind');
		modal__wind.append(btn1);
		modal__wind.append(btn2);
		btn1.innerText = 'ok';
		btn2.innerText = 'отмена';
		btn1.style.position = 'absolute';
		btn1.style.left = '50px';
		btn1.style.bottom = '40px';
		btn1.style.width = '100px';
		btn1.style.height = '30px';
		btn2.style.position = 'absolute';
		btn2.style.right = '50px';
		btn2.style.bottom = '40px';
		btn2.style.width = '100px';
		btn2.style.height = '30px';
	},
	closeModal() {
		block.style.display = 'none';
	}
};

modal.createModal();


let ModalWarning = {
	__proto__: modal,
	warning() {
		let stop = document.querySelector('.modal__wind');
		stop.style.backgroundColor = 'red';
		stop.style.left = '20%';
	},


};
ModalWarning.createModal();
ModalWarning.warning();







