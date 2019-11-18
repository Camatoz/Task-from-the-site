function clog(text) {
	console.log(text)
}

// Task - 1 (С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.)
let num = '';
for (let i = 1; i < 10; i++) {
	 num += i;
}
clog(num);

// Task - 2 (С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.)
let num2 = '';
for (let i = 9; i > 0; i--) {
	 num2 += i;
}
clog(num2);

// Task - 3 (С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.)
let num3 = '';
for (let i = 1; i < 10; i++) {
	 num3 += i + '-';
}
clog('-' + num3);

// Task - 4 (Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов)
/*
x
xx
xxx
xxxx
xxxxx
*/
let str = '';
for (let i = 0; i < 20; i++) {
	str += 'x';
	document.write(str + '<br>');
}

// Task - 5 (С помощью двух вложенных циклов нарисуйте следующую пирамидку:)
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
for (let i = 1; i < 10; i++) {
	for( let j = 1; j <= i; j++) {
		document.write(i)
	}
	document.write('<br>')
}

// Task - 6 (Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:)
/*
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/
let str2 = '';
for (let i = 0; i < 5; i++) {
	str2 += 'xx';
	document.write(str2 + '<br>');
}