

// Динамическое создание списка
// Запрашивайте число у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Каждый следующий элемент <li> списка должен должен иметь значение суммы всех предыдущих элементов + введенного значения
// Процесс прерывается, когда пользователь нажимает Esc, вводит пустую строку или не числовое значение
// Все элементы должны создаваться динамически.
//  Например, пользователь ввел 3, затем 5, затем 9, затем 15, затем 1, а затем нажал esc (или ввели не число), тогда на странице должно быть:
// <ul>  <li>3</li> 3  <li>8</li> // 3 + 5  <li>20</li> // 3 + 8 + 9  <li>46</li> // 3 + 8 + 20 + 15  <li>78</li> // 3 + 8 + 20 + 46 + 1</ul>
















//1 Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px










let p = document.createElement('p');
p.className = "text";
p.innerHTML = "Это всего лишь текст.";
document.body.append(p);
p.style.textAlign = 'center';
let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "А это сообщение об ошибке";
p.after(div);
div.style.background = 'red';
div.style.color = 'white';
div.style.padding = '20px';
div.style.textAlign = 'center';


//2 Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
// *Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым.


let ol = document.createElement('ol');
div.after(ol);
let listName = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
let li;

for (let i = 0; i < listName.length; i++) {
	li = document.createElement('li');
	ol.prepend(li);
	li.innerHTML = listName[i];
	if (i % 2 !== 0) {
		li.style.background = 'green';
		li.className = "even";
	} else {
		li.style.background = 'blue';
		li.className = "odd";
	}

}


for (let x = 0; x < listName.length; x++) {

	for (let y = 0; y < listName[x].length; y++) {


		// let q = listName[x];
		// let r = [q];
		// for (let x of r) {
		// 	if (listName[x][y] == x) {
		// 		li.style.color = 'red';
		// 	}
		// }




	}

}




const showMessage = function (message, color, top, left) {







	let elements = [message, message, message, message, message,];

	for (let i = 0; i < elements.length; i++) {


		elements[i] = document.createElement('div');
		ol.after(elements[i]);
		elements[i].innerHTML = message;
		elements[i].className = 'message';
		elements[i].style.background = color;

		elements[0].style.position = 'fixed';
		elements[i].style.position = 'fixed';
		elements[i].style.top = top + 'px';
		elements[i].style.left = left + 'px';


		if (elements.length > 3) {
			elements.splice(0, 1);
		}


	}











};

showMessage("Всем привет", "yellow", 100, 50);






let num = +prompt('введите число', '');

let list1 = document.createElement('li');
let ol2 = document.createElement('ol');

list1.innerHTML = num;


ol2.after(list1);




