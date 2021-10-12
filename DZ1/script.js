'use strict';



// 1

let a = 10;
let b = 5;

console.log(a, b);

a = a + b;
b = a - b;
a = a - b;


console.log(a, b);


// 2


const num = [22, 1, 6, 7, 2, 6, 8, 9, 4, 15];

let amount = num[0] + num[5] + num[7];

console.log(amount);




// 3

function foo() {

	let a = 10;
	let b = 5;

	console.log(a, b);

	a = a + b;
	b = a - b;
	a = a - b;

	console.log(a, b);


	const num = [22, 1, 6, 7, 2, 6, 8, 9, 4, 15];

	let amount = num[0] + num[5] + num[7];

	console.log(amount);

	const obj = {
		one: a,
		two: b,
		sum: amount
	};
	console.log(obj);

}

foo();
console.log('rere');