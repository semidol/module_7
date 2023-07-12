// Задание 6.10.5

let userAge = +prompt('Введите возраст');

if (!isNaN(userAge) && userAge != 0) {
  if (userAge >= 18 && userAge <=65) {

    let maxSum;
    if (userAge >= 18 && userAge <= 21) {
      maxSum = 50000;
    } else if (userAge >= 22 && userAge <= 35) {
      maxSum = 400000;
    } else if (userAge >= 36 && userAge <= 65) {
      maxSum = 1000000;
    }

    let userSum = +prompt(`Мы можем выдать вам максимум ${maxSum}\nВведите сумму кратную 1000.`);
    
    if (!isNaN(userSum) && userSum != 0) {
      if (userSum > maxSum) {
        alert(`Вы ввели значение, которое превышает ваш лимит. Мы можем вам выдать ${maxSum}`);
      } else if (userSum % 1000 === 0) {
        alert(`Вы можете взять кредит на сумму ${userSum}`);
      } else {
        alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${userSum - userSum % 1000}`);
      }
    } else {
      alert('Видимо, кредит вам не нужен. Всего доброго!');
    }

  } else {
    alert('К сожалению, мы не можем выдать вам кредит');
  }
} else {
  alert('Видимо, кредит вам не нужен. Всего доброго!');
}