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

