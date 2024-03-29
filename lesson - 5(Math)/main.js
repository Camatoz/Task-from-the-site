function clog(text) {
    console.log(text);
}
// Task - 1 (Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.)
let a = 10;
let b = 3;
clog(a % b);

// Task - 2 (Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.)
let a1 = 11;
let b1 = 3;
if (a1 % b1 == '0') {
    clog('Done ' + (a1 % b1));
} else {
    clog('Bed Done' + ' ' + (a1 % b1));
}

// Task - 3 (Возведите 2 в 10 степень. Результат запишите в переменную st.)
let st = Math.pow(2, 10);
clog(st);

// Task - 4 (Найдите квадратный корень из 245.)
let str = Math.sqrt(245);
clog(str);

// Task - 5 (Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.)
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
}
let sumSqrt = Math.sqrt(sum);
clog(sumSqrt);

// Task - 6 (Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.)
let str1 = Math.sqrt(379);
clog(str1);
clog(Math.round(Math.sqrt(379)));
clog(str1.toFixed(2));
clog(str1.toFixed(3));

// Task - 7 (Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.)
let str2 = Math.sqrt(587);
let obj = {
    floor: Math.floor(Math.sqrt(587)),
    ceil: Math.ceil(Math.sqrt(587))
}
clog(str2);
clog(obj);

// Task - 8 (Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.)
let max = Math.max(4, -2, 5, 19, -130, 0, 10);
let min = Math.min(4, -2, 5, 19, -130, 0, 10);
clog(max);
clog(min);

// Task - 9 (Выведите на экран случайное целое число от 1 до 100.)
let random = (Math.random() * 100).toFixed(0);

// Task - 10 (Заполните массив 10-ю случайными целыми числами.)
let arrt = [];
for (i = 0; i < 10; i++) {
    arrt[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
clog(arrt);

// Task - 11 (Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.)
let as = 5;
let bs = 10;
let resultAsBs = Math.abs(as - bs);
clog(resultAsBs);

// Task - 12 (Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.)
let ad = 3;
let bd = 5;
let cd = (Math.abs(ad - bd));
clog(cd);

// Task - 13 (Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.)
let arrs = [12, 15, 20, 25, 59, 79];
let c=0;
for (var i = 0; i < arrs.length; i++) {
c+=arrs[i];
}
clog(c/arrs.length);

// Task - 14 (Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4)
let k = 1;
let fact='10!';
for (let i = 1; i <= parseInt(fact); i++) {
k *= i;
}
clog(k);
