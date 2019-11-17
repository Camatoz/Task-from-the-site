// Task - 1 (Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.)
function compare(a, b) {
    if ( a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(compare(3, 3));

// Task - 2 (Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.)
function sum(a, b) {
    if (a + b > 10) {
        return true;
    }   else {
        return false;
    }
}

console.log(sum(1, 6));

// Task - 3 (Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.)
function minMax(a, b) {
    if (a < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(minMax(-6));