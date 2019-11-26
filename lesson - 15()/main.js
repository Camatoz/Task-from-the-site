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
for ( let i = 2; i < 100; i += 2) {
  document.write(i + '-');
}
document.write("<hr>");