// Задание 3
let numberA = 9;
let bNum = 9;

function firstNumber(numberA){
  return function secondNumber(bNum){
    return numberA+bNum
  }
}
console.log(firstNumber(numberA)(bNum))