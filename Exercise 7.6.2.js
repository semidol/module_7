// Задание 7.6.2

let arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
let uniqueSet = new Set(arr);
let uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr)