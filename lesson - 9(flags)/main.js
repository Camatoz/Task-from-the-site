// Task - 1 (Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.)
let arr = [1, 2, 3, 4];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        flag = true;
        break;
    }
}

if (flag === true) {
    console.log('Yes');
} else {
    console.log('No')
}

// Task - 1 (Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.)
function hasElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            return true;
        }
    }
    return false;
}
arr = [1, 2, 3, 4, 5];
console.log(hasElem(arr));

// Task - 2 (Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.)
let num = 31;
let isDelitsa = true;
for (let i = 2; i < num; i++) {
    if (num % i) {
        isDelitsa = false;
        // console.log(i + '=' + isDelitsa);
    } else {
        isDelitsa = true;
        // console.log(i + '=' + isDelitsa);
    }
}
console.log(isDelitsa);

// Task - 3 (Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.)
let arr2 = [1, 2, 3, 3, 4, 5];
let replay = false;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] ==arr2[i-1]) {
        replay = true;
        break;
    }
}

if (replay == true) {
    console.log('Yes');
} else {
    console.log('No')
}