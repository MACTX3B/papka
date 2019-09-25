
let a = prompt("Введите число а");
let b = prompt("Введите число b");
let c = prompt("Введите число c");

if (a===b || b===c || c===a) {
  alert('Ошибка: вы ввели два одинаковых числа');
}
else {


if (a>b && a>c) {
    alert(a);
  }
  else {

if (b>c && b>a) {
alert(b);
} else {
  alert(c);
}
}
}
