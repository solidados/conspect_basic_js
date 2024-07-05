/* function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    // Суммируем ASCII-код каждого символа строки
    hash += str.charCodeAt(i);
  }
  return hash;
}

const input = "ABC";
const hashValue = simpleHash(input);
console.log(hashValue); // Выведет 198 (65 + 66 + 67)


const myHashTable = new Map();

myHashTable.set('key1', 'value1');
myHashTable.set('key2', 'value2');
myHashTable.set('key3', 'value3');

console.log(myHashTable.get('key2')); // value2


let arr = [1, 2, 3, 4, 5]
for (const i of arr) {
  i += 1
}
 */

// const obj = {a: 'Pasha'};
// const obj2 = {b: true};
// const obj3 = {
//   c: 'Hello',
//   greet () {
//     console.log(`${this.c}, ${this.a}`);
//   }
// };
//
// const objCopy = Object.assign({}, obj, obj2, obj3)
// objCopy.greet()

let browserType = 'mozilla';
console.log(browserType.indexOf('ll'))
// const j = 'rocks'
// const s = 'sknpgskazlwqrwq'
// console.log(s.split('').filter(char => char === 'rocks').length)

// console.log(s.split('').filter(c => j.includes(c)).join(''))
// const findValuableRocks = () => {
//   const sArr = s.split('');
// return sArr.filter(char => j.includes(char)).join('').length
// }

// console.log(findValuableRocks(s))