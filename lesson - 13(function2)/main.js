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