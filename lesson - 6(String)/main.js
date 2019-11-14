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