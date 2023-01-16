// Задание 2
let num = prompt('Введите любое число до 1000');

function testNumber(num){
 if(num < 1||num > 1000){
   return 'Вы ввели некоректное число';
}else if(num == 1){
   return 'Число 1 не является простым или составным. Введите другое число';
}{
 for (let i = 2; i < num; i++) {
  if (num % i == 0) {
   return "Составное число";
 }
}
 return "Простое число";
 }
}
console.log(testNumber(num))