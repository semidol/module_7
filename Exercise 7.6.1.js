// Задание 7.6.1

let word = 'Довод';
let changedWord = '';
let isPalindrome = true

for (let i = 0; i <= word.length - 1; i += 1) {
  if (word[i] !== ' ') {
    changedWord += word[i].toLowerCase();
  }
}

for (let k = 0; k < (changedWord.length - 1) / 2; k += 1) {
  if (changedWord[k] !== changedWord[changedWord.length - 1 - k]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`Слово ${word} является палиндромом`)
} else {
  console.log(`Слово ${word} не является палиндромом`)
}