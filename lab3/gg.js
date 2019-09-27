let g = 9;
let h = 3;

function plus(a,b)
{

  alert('Сумма чисел равна '+ ( a+b));
}

function minus(a,b)
{

alert('Разность чисел равна '+ (a-b));
}

function mnozh(a,b)
{
  alert('Произведение чисел равно ' + (a*b));
}

function del(a,b)
{
  alert('Частное чисел равно '+ (a/b));
}

let c = prompt('Какое действие вы хотите выполнить(Символ)');

 switch (c)
 {
   case '+':
   plus(g,h);
   break;
   case '-':
   minus(g,h);
   break;
   case '*':
   mnozh(g,h);
   break;
   case '/':
   del(g,h);
   break;
   default:
   alert('Вы ввели что-то не то');
 }
