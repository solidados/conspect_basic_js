function simpleHash(str) {
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

