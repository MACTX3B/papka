let a = +prompt("Введите число а");
let b = +prompt("Введите число b");

let vopros = confirm("Выполнить сложение?");
if (vopros === true) {

  alert(a + b);

}
else {
  alert("Произошла ошибка");
}
