function clog(text) {
  console.log(text);
}

// Task - 0 (Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.)
var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
  if (num >= 0) {
    return true;
  } else {
    return false;
  }
}

var newArr = [];
for (var i = 0; i <= arr.length; i++) {
  if (isPositive(arr[i])) {
    newArr.push(arr[i]);
  }
}

clog(newArr);

// Task - 1 ( Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.)
function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}
clog(isNumberInRange(29));

// Task - 2 (Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.)
let newArray = [-9, -5, 5, 9, 15, 19];
let myArr = [];
for (let i = 0; i <= newArray.length; i++) {
  if (isNumberInRange(newArray[i])) {
    myArr.push(newArray[i]);
  }
}
clog(myArr);

// Task - 3 (Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.)
function getDigitsSum(num) {
  var num = String(num);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}
clog(getDigitsSum(33));

// Task - 4 ( Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.)
for (let i = 1; i < 2019; i++) {
  if (getDigitsSum(i) == 13) {
    document.write(i + "<br>");
  }
}

// Task - 5 (Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.)
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
clog(isEven(90));

// Task - 6 (Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.)
let arrNum = [2, 5, 8, 12, 13, 14];
let newArrNum = [];
for (let i = 0; i < arrNum.length; i++) {
  if (isEven(arrNum[i])) {
    newArrNum.push(arrNum[i]);
  }
}
clog(newArrNum);

// Task - 7 (Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).)
function getDivisors(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
clog(getDivisors(6));
