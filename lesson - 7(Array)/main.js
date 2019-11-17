function clog(text) {
    console.log(text);
}

// Task - 1 (Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.)
let a = [1, 2, 3];
let b = [4, 5, 6];
let v = a.concat(b)
clog(v);

// Task - 2 (Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].)
a = [1, 2, 3];
clog(a.reverse());

// Task - 3 (Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.)
a = [1, 2, 3];
a.push(4, 5, 6);
clog(a);

// Task - 4 ( Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.)
a = [1, 2, 3];
a.unshift(4, 5, 6);
clog(a);

// Task - 5 (Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.)
let j = ['js', 'css', 'jq'];
let k = j.shift();
clog(k);

// Task - 6 (Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.)
j = ['js', 'css', 'jq'];
let l = j.pop();
clog(l);

// Task - 7 (Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].)
let num = [1, 2, 3, 4, 5];
let newNum = num.slice(0, 3);
clog(newNum);

// Task - 8 (Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].)
num = [1, 2, 3, 4, 5];
let newNum2 = num.slice(3, 5);
clog(newNum2);

// Task - 9 (Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].)
num = [1, 2, 3, 4, 5];
let num1 = num.splice(1, 2);
clog(num);

// Task - 10 ( Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].)
num = [1, 2, 3, 4, 5];
let num2 = num.splice(1, 3);
clog(num2);

// Task - 11 (Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].)
num = [1, 2, 3, 4, 5];
let num3 = num.splice(3, 0, 'a', 'b', 'c');
clog(num);

// Task - 12 ( Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].)
num = [1, 2, 3, 4, 5];
let num4 = num.splice(1, 0, 'a', 'b');
let num5 = num.splice(6, 0, 'c');
let num6 = num.splice(8, 0, 'e');
clog(num);

// Task - 13 (Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.)
let num7 = [3, 4, 1, 2, 7];
clog(num7.sort());

// Task - 14 (Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.)
let obj =  {js:'test', jq: 'hello', css: 'world'};
clog(Object.keys(obj));