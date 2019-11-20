function clog(text) {
	console.log(text)
}

// Task - 1 (Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.)
let arr = [];
let str = 'x';
for (let i = 0; i < 5; i++) {
    arr[i] = str;
    str += 'x';
}
clog(arr);

// Task - 2 (Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.)
str = '';
arr = [];
for (let i = 1; i < 5; i++) { 
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    arr.push(str);
    str = '';
}
clog(arr);

// Task - 3 (Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].)
let emptyArr = [];
function arrayFill(value, length) {
    var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}
clog(arrayFill('x', 5));

// Task - 4 (Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.)
arr = [1, 3, 6, 7, 3, 45, 2];
let a = 0;
for(let i = 0; i < arr.length; i++) {
  a += arr[i];
  if(a > 10) {
    console.log(i);
    break;
  }
}