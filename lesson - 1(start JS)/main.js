function clog(text) {
    console.log(text);
};

// Task-1 (Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.)
// let str = ("abcde");
// clog(str);
// clog(str[0]);
// clog(str[2]);
// clog(str[4]);

// Task-2 (Напишите скрипт, который считает количество секунд в часе, day, year)
// let min = 60;
// let hour = 60 * 60;
// let day = hour * 24;
// let year = day * 365;
// clog(year);

// Task-3 (Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. Количество строк кода при этом не должно измениться.)
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num ++;
// num --;
// clog(num);

// Task-4 (Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).)
// let a = 10;
// let b = 2;
// clog(a + b);
// clog(a - b);
// clog(a * b);
// clog(a / b);

// Task-5 (Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.)
// let c = 15;
// let d = 2;
// let result = (c + d);
// clog(result);

// Task-6 (Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.)
// let a = 17;
// let b = 10;
// let c = (a - b);
// let d = 7;
// let result = (c + d);
// clog(result);

// Task-1 with string (Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.)
// let str = ("Hi, everyone!");
// alert(str);

// Task-2 (Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.)
// let str1 = ("Hi, ");
// let str2 = ("everyone!");
// let strAll = (str1 + str2);
// clog(strAll);

// Task-3 (Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.)
// let name = ("Yura");
// clog("Hi, " + name + "!");

// Task-4 (Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.)
// let age = (36);
// clog("I'm " + age + " yers old.");

// Task-5 (Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.)
// let name1 = prompt ("How is your name?");
// alert ("Your name is " + name1 + ".");

// Task-6 (Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.)
// let num = prompt("Tipe the number");
// clog('Квадрат вашего числа : ' + num * num);

// Task-7 (Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.)
let num = ('12345');
let numAll = (num[0] * num[1] * num[2] * num[3] * num[4]);
clog(numAll);