function clog(text) {
    console.log(text);
}

// Task - 1 (Дана строка 'js'. Сделайте из нее строку 'JS'.)
let a = 'js';
clog(a.toUpperCase());

// Task - 2 (Дана строка 'JS'. Сделайте из нее строку 'js'.)
let b = 'JS';
clog(b.toLowerCase());

// Task - 3 (Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.)
let str = 'я учу javascript!';
clog(str.length);

// Task - 4 (Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).)
str = 'я учу javascript!';
clog(str.substr(2, 14));
clog(str.substring(2, 16));
clog(str.slice(2, 16));

// Task - 5 (Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.)
str = 'я учу javascript!';
clog(str.indexOf('учу'));

// Task - 6 (Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.)
let myStr = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
let n = 90;
let result = 0;
if (myStr.length > n) {
    result = n + '...';
} else {
    result = myStr;
}
clog(result);

// Task - 7 (Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.)
let d = 'Я-учу-javascript!';
let newD = d.replace(/-/g, '!');
clog(newD);

// Task - 8 (Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.)
str = 'я учу javascript!';
clog(str.split(' '));

// Task - 8 (Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.)
str = 'я учу javascript!';
clog(str.split(''));

// Task - 10 (В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.)
let date = '2025-12-31';
let arr = date.split('-');
let newDate = arr[2] + '.' + arr[1] + '.' + arr[0];
clog(newDate);

// Task - 10 (В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.)
var dateq = '2025-12-31';
var arrq = dateq.split('-');
var arrq = arrq.reverse();
var resultq = arrq.join('.');
clog(resultq);

// Task - 11 (Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.)
let arr1 = ['я', 'учу', 'javascript', '!'];
let arr2 = arr1.join('+');
clog(arr2);

// Task - 12 (Преобразуйте первую букву строки в верхний регистр.)
str = 'я учу javascript!';
let str2 = str[0].toUpperCase() + str.substring(1);
clog(str2);

// Task - 13 (Преобразуйте первую букву каждого слова строки в верхний регистр.)
str = 'я учу java script!';
let arrS = str.split(' ');
let newStr = '';
for (let i = 0; i < arrS.length; i++) {
    newStr += arrS[i][0].toUpperCase() + arrS[i].slice(1) + ' ';
}
clog(newStr);

// Task - 14 (Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.)
var str8 = 'var_test_text';
var arr8 = str8.split('_');
var newStr8 = arr8[0];
for(var i = 1; arr8.length>i; i++) {
newStr8 += arr8[i][0].toUpperCase() + arr8[i].slice(1);
}
console.log(newStr8)