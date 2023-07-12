// Задание 7.6.4

let row = '';
let isCross = true;

for (let i = 0; i <= 2; i += 1) {

  for (let k = 0; k <= 2; k += 1) {
    if (isCross === true) {
      row += 'x ';
      isCross = false;
    } else {
      row += 'o ';
      isCross = true;
    }
  }

  row += '\n';
  
}

console.log(row)