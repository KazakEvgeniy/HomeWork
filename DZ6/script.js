
'us strict';

// 1 Создать форму в HTML с 2 полями ввода и кнопкой отправки. Получить эту форму на событие отправки этой формы (т е нажатие кнопки), сделать кнопку неактивной и очистить форму


let form = document.forms[0];
let elem = form.elements;


form.addEventListener('submit', function (e) {
	e.preventDefault();
	elem.btn.disabled = 'true';
	console.log(elem[0].value);
	console.log(elem[1].value);
	elem.btn.type = 'reset';
});




// 2 Создать форму в HTML с полем ввода и кнопкой отправки, на submit формы менять значение поля ввода на произвольное



let form2 = document.forms['Form2'];
let elem2 = form2.elements;


form2.addEventListener('submit', function (e) {
	e.preventDefault();
	elem2.text2.value = '765-43-21';
});



// 3 Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки. На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox.




let form3 = document.forms['Form3'];
let elem3 = form3.elements;


form3.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(elem3.text3.value);
	for (let i = 0; i < elem3.length; i++) {
		if (elem3[i].type == 'checkbox' && elem3[i].checked) {
			console.log(elem3[i].name);
		}
	}

});



// 4 Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если поля ввода пустое, делать фокус на поле ввода.



let form4 = document.forms['Form4'];
let elem4 = form4.elements;


form4.addEventListener('submit', function (e) {

	if (elem4.text4.value == '') {
		elem4.text4.focus();
	}



});

//5 Создать форму в HTML с полями для ввода имени, фамилии, телефона и сообщения. Для поля телефона задать максимальное количество символов 13, сообщение может быть большим. При submit формы создавать объект со всеми значениями формы и выводить его.


let form5 = document.forms['Form5'];
let elem5 = form5.elements;


form5.addEventListener('submit', function (e) {

	e.preventDefault();
	let name = elem5.username.value;
	let surname = elem5.surname.value;
	let phone = elem5.phone.value;
	let massage = elem5.massage.value;

	const objForm5 = {
		имя: name,
		фамилия: surname,
		телефон: phone,
		сообщение: massage
	};

	console.log(objForm5);

});

//(2)1 Создать калькулятор расхода и дохода. Пользователь вводит число в поле ввода и выбирает с помощью radio кнопки доход это или расход. На нажатие кнопки нужно рассчитать текущее значение счета,  а также отрисовать  столбики диаграммы дохода и расхода разными цветами. При нажатии кнопки поля ввода очищаются


let formCalc = document.forms['formCalc'];
let elem6 = formCalc.elements;
let collectionName = document.getElementsByName('nameRadio');


formCalc.addEventListener('submit', function (e) {
	e.preventDefault();
	let enteredValue1 = +elem6.enteredValue1.value;
	let enteredValue2 = +elem6.enteredValue2.value;
	let form6 = document.querySelector('.form6');
	let graph = document.createElement('div');
	let graph2 = document.createElement('div');
	let graph3 = document.createElement('div');

	graph.innerText = 'Вводная' + '=' + enteredValue1;
	graph.style.textAlign = 'center';
	form6.append(graph);
	graph.style.backgroundColor = 'blue';
	graph.style.width = enteredValue1 + 'px';
	graph.style.height = '25px';

	for (let i = 0; i < collectionName.length; i++) {
		if (collectionName[i].checked && collectionName[i].value == 'profit') {
			console.log(enteredValue1 + enteredValue2);
			graph2.innerText = 'доход' + '-' + enteredValue2 + ' остаток' + '=' + (enteredValue1 + enteredValue2);
			graph2.style.textAlign = 'center';
			form6.append(graph2);
			graph2.style.backgroundColor = 'green';
			graph2.style.height = '25px';
			graph2.style.width = enteredValue1 + enteredValue2 + 'px';
		} else if (collectionName[i].checked && collectionName[i].value == 'loss') {
			console.log(enteredValue1 - enteredValue2);
			graph3.innerText = 'расход' + '-' + enteredValue2 + ' остаток' + '=' + (enteredValue1 - enteredValue2);
			graph3.style.textAlign = 'center';
			form6.append(graph3);
			graph3.style.backgroundColor = 'red';
			graph3.style.height = '25px';
			graph3.style.width = enteredValue1 - enteredValue2 + 'px';
		}
	}

	formCalc.reset();
	elem6.enteredValue1.value = '';

});




// Создать функцию, которая создает модальное окно с вопросом о имени и возрасте пользователя. Поля обязательные для заполнения. В окне 2 кнопки - отмена и добавить. При нажатии отмены, окно закрывается, при нажатии на добавить, проверяется, если возраст больше 18, то на странице появляется новый элемент списка с именем и возрастом пользователя, если нет выводится красное текстовое сообщение. 
// Функция вызывается на нажатие кнопки - Добавить пользователя



let modalBtn = document.querySelector('.modalBtn');
let modal = document.querySelector('.modal');
let cansel = document.querySelector('.Btncancel');
let form7 = document.forms['form7'];
let elem7 = form7.elements;

modalBtn.onclick = function (e) {
	e.preventDefault();
	modal.style.display = 'block';
};


cansel.onclick = function (e) {
	e.preventDefault();
	modal.style.display = 'none';
};

form7.addEventListener('submit', function (e) {
	e.preventDefault();
	let nameUser = elem7.nameuser.value;
	let age = +elem7.age.value;
	if (age > 18) {
		let newUser = document.createElement('div');
		modalBtn.after(newUser);
		newUser.className = 'newUser';
		newUser.style.margin = '25px';
		newUser.innerText = 'Имя: ' + nameUser + ',' + ' возраст: ' + age;

	} else {

		let mistake = document.createElement('div');
		modal.append(mistake);
		mistake.style.position = 'fixed';
		mistake.style.right = '10px';
		mistake.style.top = '10px';
		mistake.style.fontSize = '25px';
		mistake.style.padding = '20px 50px';
		mistake.className = 'mistake';
		mistake.style.margin = '25px';
		mistake.style.backgroundColor = 'red';
		mistake.innerText = 'mistake';
		form7.reset();
	}

});
