### Arrays Iterating, Sorting, Filtering
#### Bubble Sort
> this algorythm passes the list several times comparing neighbour elements and swapping their places in case they are in a wrong order.
```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1){
    for (let j = 0; j < arr.length - 1; j += 1){
      if (arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Вывод: [11, 12, 22, 25, 34, 64, 90]
```  
#### Selection Sort
> • in this algorythm on each iteration, the smallest element in the rest of the list is found and swapped with the element at the current position.  
> • the sorting process continue until the list is sorted  
```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    let minIndex = i;
    
    for (let j = i + 1; j < arr.length - 1; j += 1) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Вывод: [11, 12, 22, 25, 34, 64, 90]
```  
#### Linear Search
> • in this algorythm each element compared with the target value  
> • if the target is found it returns elements index, else it returns `-1`  
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === target) return i;
  }
  return -1;
}

const array = [12, 45, 67, 23, 9];
const targetValue = 23;
const index = linearSearch(array, targetValue);
console.log(index); // Вывод: 3
```
#### Binary Search
> • this algorithm assumes that the list is sorted  
> • it finds the mid value of the list and compares it with the target value  
> • if values are equal it returns index  
> • if the target value is less, the search continues in the left side of the list  
> • if the target value is greater, the search continues in the right side of the list  
> • the process continues until the target is found or the list is over  

```javascript
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if(arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}
const sortedArray = [11, 12, 22, 25, 34, 64, 90];
const targetValue = 25;
const index = binarySearch(sortedArray, targetValue);
console.log(index); // Вывод: 3
```