// Задание 6.10.3

let userName = prompt('Введите имя');
let userYearOfBirth = +prompt('Введите год рождения');

if (!isNaN(userYearOfBirth) && userYearOfBirth != 0) {
  alert(`${userName}: ${2023 - userYearOfBirth}`);
} else {
  alert('Год должен быть числом!');
}