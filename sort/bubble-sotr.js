function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    // Внутренний цикл проходит по элементам, которые еще не находятся на своих местах
    for (let j = 0; j < n - 1 - i; j++) {
      // Сравниваем соседние элементы
      if (arr[j] > arr[j + 1]) {
        // Меняем их местами, если текущий элемент больше следующего
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Выведет: [-29, -12, -5, 0, 3, 5, 7, 21, 23, 35, 54]