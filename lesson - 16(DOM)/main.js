function clog(text) {
  console.log(text);
}
// События через атрибуты
// Task - 1 (Повторите страницу по данному по образцу)
function buttonClick() {
  alert("Hi, there");
}

// Task - 2 (Повторите страницу по данному по образцу)
function onMouseOver() {
  alert("Hi, there");
}

// Task - 3 (Повторите страницу по данному по образцу)
function buttonDoubleClick() {
  alert("Hi, there");
}

// Task - 4 (Повторите страницу по данному по образцу)
function onMouseOut() {
  alert("Hello");
}

// Метод getElementById и работа с атрибутами
// Task - 5 (Повторите страницу по данному по образцу)
function go() {
  let input = document.getElementById("test");
  alert(input.value);
}

// Task - 6 (Повторите страницу по данному по образцу)
function go1() {
  let input = document.getElementById("test1");
  input.value = "Ой, я поменял свой текст!";
  alert(input.value);
}

// Task - 7 (Повторите страницу по данному по образцу)
function monkey() {
  let elem = document.getElementById("monkey");
  elem.src = "2.jpg";
}

// Работа с this
// Task - 8 (Повторите страницу по данному по образцу)
function more(elem) {
  alert(elem.value);
}

// Task - 9 (Повторите страницу по данному по образцу)
function anotheText(elem) {
  elem.value = "Ой, я поменял текст";
}

// Task - 10 (Повторите страницу по данному по образцу)
function anotherText2(elem) {
  elem.value = "Ой, я поменял текст";
}

function stop(elem) {
  elem.value = "Я снова поменял текст!";
}
