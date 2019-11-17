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
}   else {
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
