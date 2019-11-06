// Task - 1 (Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.)
// Task - 2 (Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').)
let objj = ['Hi,', ' world', '!'];
objj[0] = ('Bye,');
let text = (objj[0] + objj[1] + objj[2]);
console.log(text)

// Task - 3 (Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.)
let obj = {
    'Коля': '1000',
    'Вася': '500',
    'Петя': '200'
};
console.log(obj['Коля']);
console.log(obj['Петя']);

// Task - 4 (Выведите  слово 'red')
var arr = {
    'ru': ['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green'],
};
console.log(arr['en'][1]);

// Task - 5 ( Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.)
arr1 = ['2', '5', '3', '9'];
result = ((arr1[0] * arr1[1]) + (arr1[2] * arr1[3]));
console.log(result);

// Task - 6 (Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.)
let week = {
    '1': 'Mon.',
    '2': 'Tues.',
    '3': 'Wed.',
    '4': 'Thurs.',
    '5': 'Fri.',
    '6': 'Sat.',
    '7': 'Sun.'
}
console.log(week[3]);

// Task - 7 (Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.)
let day = 3;
let week2 = {
    '1': 'Mon.',
    '2': 'Tues.',
    '3': 'Wed.',
    '4': 'Thurs.',
    '5': 'Fri.',
    '6': 'Sat.',
    '7': 'Sun.'
};
console.log(week2[day]);

// Task - 8 (Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.)
const arrBig = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arrBig[1][0]);

// Task - 9 (Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.)
let obj1 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
console.log(obj1['js'][0]);

// Task - 10 (Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски.)
let objWeek = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};
console.log(objWeek['ru'][0]);
console.log(objWeek['en'][2]);

// Task - 11 (Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 2 - то выведем 'среда'.)
let lang = ('ru');
let day2 = (2);
let objWeek2 = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};
console.log(objWeek2[lang][day2]);