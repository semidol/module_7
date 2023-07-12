// Задание 7.6.5

const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there'
};
let arr = [];

for (let key in obj) {
  if (Array.isArray(obj[key])) {
    for (let value of obj[key]) {
      arr.push(value);
    }
  } else {
    arr.push(obj[key]);
  }
}

console.log(arr);