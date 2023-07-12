// Задание 7.6.3

let number = +prompt('Введите число');
let arr = [];

if (!isNaN(number)) {
  for (let i = 0; i <= number; i += 1) {
    arr.push(i);
  }
  console.log(arr)
} else {
  console.log('Вы ввели не число')
}