function clog(text) {
  console.log(text);
}

// Task - 0 (Реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. Первым параметром функция должна принимать значение, а вторым - массив. Если такой элемент есть - функция должна вернуть true, а если нет - false.)
function inArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }

  return false;
}

let arr = [1, 2, 3, 4, 5];
clog(inArray(7, arr));

// Task - 0 (Задача: реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). Если число простое - функция должна вернуть true, в противном случае false.)
function isSimple(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
    return true;
  }
}

clog(isSimple(13));

// Task - 0 (Задача: реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].)
function getDivisors(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }

  return result;
}

clog(getDivisors(24)); //выведет [1, 2, 3, 4, 6, 12, 24]

// Task - 0 (Задача: реализуйте функцию getIntersection, которая параметрами будет принимать два массива и возвращать массив элементов, которые есть и в одном, и во втором массиве (это называется пересечение массивов). К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].)
function getIntersection(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (inArray(arr1[i], arr2)) {
      arr.push(arr1[i]);
    }
  }
  return arr;
}
clog(getIntersection([1, 2, 3], [2, 3, 4])); //выведет [2, 3]

// Task - 0 (Задача: реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать наибольший общий делитель (НОД) этих двух чисел. К примеру, для чисел 12 и 18 НОД равен 6.)
function getGreatestCommonDivisor(num1, num2) {
  let divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6']
  return Number(Math.max.apply(null, divisors));
}

clog(getGreatestCommonDivisor(12, 18)); //выведет 6

// Task - 1 (Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.)
let str = 'я учу java script!';

function ucfirst(str) {
  let myArr = str.split(' ');
  let newStr = '';
  for (let i = 0; i < myArr.length; i++) {
    newStr += myArr[i][0].toUpperCase() + myArr[i].slice(1) + ' ';
  }
  return newStr;
}

clog(ucfirst('я учу java script!'));