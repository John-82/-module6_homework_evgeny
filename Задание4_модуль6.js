// Задание 4
let a = prompt('Введите число')
let b = prompt('Введите число')
const numInterval = setInterval (function(a, b){
  while(a <= b) {
    console.log(a++);
  }
}, 1000, a, b)
