function clog(text) {
  console.log(text);
}

// Task - 1 (Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл)
let arr = [1, 2, 3, 4, 5];

let newArr = '';
for (let i = 0; i < arr.length; i++) {
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

// Task - 1 (Выведите с помощью цикла столбец чисел от 1 до 100.)
for (var i = 1; i <= 100; i++) {
  document.write(i + '-');
}
document.write("<hr>");

// Task - 2 (Выведите с помощью цикла столбец чисел от 100 до 1.)
for (let i = 100; i > 0; i--) {
  document.write(i + '-');
}
document.write("<hr>");

// Task - 3 (Выведите с помощью цикла столбец четных чисел от 1 до 100.)
for (let i = 2; i < 100; i += 2) {
  document.write(i + '-');
}
document.write("<hr>");

// Task - 4 (Заполните массив 10-ю иксами с помощью цикла.)
let arr1 = [];
for (let i = 0; i < 10; i++) {
  arr1[i] = 'x';
}
clog(arr1);

// Task - 5 (Заполните массив числами от 1 до 10 с помощью цикла.)
for (let i = 1; i <= 10; i++)
  document.write(i);
document.write("<hr>");

// Task - 6 (Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.)
let arr2 = [];
for (let i = 0; i <= 10; i++) {
  arr2.push(Math.random().toFixed(2));
}
document.write(arr2);
document.write("<hr>");