function clog(text) {
    console.log(text);
}

// Task - 1 ( Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb.)
let str = 'ahb acb aeb aeeb adcb axeb';
let newStr = str.replace(/a.b/g, '!');
clog(newStr);

// Task - 2 ( Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea.)
let str1 = 'aba aca aea abba adca abea';
let newstr1 = str1.replace(/a..a/g, '!');
clog(newstr1);

//  Task - 3 ( Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca.)
let str2 = 'aba aca aea abba adca abea';
let newstr2 = str2.replace(/ab.a/g, '!');
clog(newstr2);

// Task - 4 (Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba.)
let str3 = 'aa aba abba abbba abca abea';
let newStr3 = str3.replace(/ab+a/g, '!');
clog(newStr3);

// Task - 5 (Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba.)
let str4 = 'aa aba abba abbba abca abea';
let newStr4 = str4.replace(/ab*a/g, '!');
clog(newStr4);

// Task - 6 (Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba.)
let str5 = 'aa aba abba abbba abca abea';
let newStr5 = str5.replace(/ab?a/g, '!');
clog(newStr5);

// Task - 7 (Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea.)
let str6 = 'aa aba abba abbba abca abea';
let newStr6 = str6.replace(/ab*a/g, '!');
clog(newStr6);

// Task - 8 (Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.)
let str7 = 'aa aba abba abbba abca abea';
let newStr7 = str7.replace(/(ab)+/, '!');
clog(newStr7);

// Task - 9 (Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.)
let str8 = 'a.a aba aea';
let newStr8 = str8.replace(/a\.a/g, '!');
clog(newStr8);

// Task - 10 (Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.)
let str9 = '2+3 223 2223';
let newStr9 = str9.replace(/2\+3/g, '!');
clog(newStr9);

// Task - 11 (Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество).)
let strQ = '23 2+3 2++3 2+++3 345 567';
let newStrQ = strQ.replace(/2(\+)+3/g, '!');
clog(newStrQ);

// Task - 12 (Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные.)
let strW = '23 2+3 2++3 2+++3 445 677';
let newStrW = strW.replace(/2\+*3/g, '!');
clog(newStrW);

// Task - 13 (Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.)
let strE = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
let newStrE = strE.replace(/\*q+\+/g, '!');
clog(newStrE);

// Task - 14 (Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a).)
let strR = 'aba accca azzza wwwwa';
let newStrR = strR.replace(/a.+?a/g, '!');
clog(newStrR);