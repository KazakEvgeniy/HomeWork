
// 1


let num = 0;

while (num < 50) {
	num++;
	console.log(num);

}

// 2


for (let i = 0; i < 100; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}



// 3


var numberSum = [2, 4, 6, 10, 2, 12, 32, 15, 4, 6, 9, 8, 7, 5, 6, 9, 1, 5, 7, 14];

function arraySum(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}
	console.log(sum);

}
arraySum(numberSum);



// 4


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



// 5

// x/z
console.log('fff');