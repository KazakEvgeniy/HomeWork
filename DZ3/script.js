// 1

let array = ['дом', 'стол', 'дерево'];
let newArray = [];

for (let i = 0; i < array.length; i++) {
	let length = array[i].length;
	newArray[i] = length;
}
console.log(newArray);


// 2


let newArray3 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];

newArray3.forEach(function (item) {
	if (typeof (item) === 'string') {
		console.log(item + '-string value');
	} else {
		console.log(item + '-number value');
	}
});



// 3.
const oldarray = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];

const newArray2 = oldarray.filter(function (item) {

	return item > 10;

});

console.log(newArray2);

// 4.





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

