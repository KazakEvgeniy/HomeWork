
'us strict';


// Выводить значения скрола с верху страницы на событие прокрутки страницы.


// window.addEventListener('scroll', function () {
// 	console.log(this.scrollY);
// });




// При скроле, в момент активного 2-го экрана покажите фиксированную кнопку внизу страницы, которая до этого будет являться скрытой.







let pageOne = document.querySelector('.page-one');
let pageTwo = document.querySelector('.page-two');
let btnPageTwo = document.querySelector('.btn-page-two');



pageTwo.addEventListener('mousemove', function () {
	btnPageTwo.style.display = 'block';
});


window.addEventListener('scroll', function (e) {

	// console.log(this.pageYOffset);
	// console.log(e.offsetHeight);
	// console.log(window.clientHeight);
	console.log(document.documentElement.clientHeight);
});









// window.addEventListener('scroll', function (e) {



// });



