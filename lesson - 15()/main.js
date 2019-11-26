
// Task - 1 (Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл)
let arr = [1, 2, 3, 4, 5];

let newArr = '';
for ( let i = 0; i < arr.length; i++) {
  newArr += arr[i];
}
clog(newArr);


function func(arr) {
	console.log(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
clog(func(arr));