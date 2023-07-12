// Задание 6.10.4

let userName = prompt('Введите имя');
let userYearOfBirth = +prompt('Введите год рождения');
let userAge = 2023 - userYearOfBirth;

if (!isNaN(userYearOfBirth) && userYearOfBirth != 0) {
  switch (userAge % 10) {
    case 1:
      alert(`${userName}: ${userAge} год`);
      break;
    case 2:
    case 3:
    case 4:
      alert(`${userName}: ${userAge} года`);
      break;
    default:
      alert(`${userName}: ${userAge} лет`);
  }
} else {
  alert('Год должен быть числом!');
}