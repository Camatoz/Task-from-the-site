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

let arri = [1, 2, 3, 4, 5];
clog(inArray(7, arri));

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
function ucfirst(str) {
  let myArr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < myArr.length; i++) {
    newStr += myArr[i][0].toUpperCase() + myArr[i].slice(1) + " ";
  }
  return newStr;
}

clog(ucfirst("я учу java script!"));

// Task - 2 (Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.)
function bigFirstLetter(str) {
  let arr = str.split("_");
  let newStr = arr[0];
  for (let i = 1; arr.length > i; i++) {
    newStr += arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return newStr;
}
document.write(bigFirstLetter("let_text_hello_let_text_hello"));

// Task - 3 (Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.)
function inArray2(value, arr) {
  for (let i = 0; i < words.length; i++) {
    if (arr[i] == value) {
      return true;
    }
  }
  return false;
}

let words = ["big", "bad", "bag"];
let search = "bad";
clog(inArray2(search, words));

// Task = 4 (Дана строка, например, '123456'. Сделайте из нее '214365'.)
function sameRevers(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      let b = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = b;
    }
  }
  str = arr.join("");
  return str;
}
let str = "1234567890";
clog(sameRevers(str));
