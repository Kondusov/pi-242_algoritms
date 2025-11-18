// Задача 5: Реализуйте сортировку выбором для массива строк. Например,
// для входного массива ["banana", "apple", "kiwi"] результат должен быть ["kiwi", "apple", "banana"].
// (отсортировали по колличеству символов)
function stringsSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      // Внутренний цикл проходит по элементам, которые еще не находятся на своих местах
      for (let j = 0; j < n - 1 - i; j++) {
        // Сравниваем соседние элементы
        if (arr[j].length > arr[j + 1].length) {
          // Меняем их местами, если текущий элемент больше следующего
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  const unsortedArray = ['sdjsads', 'ldskjsadgh', 'sadf', 'd', 'dshkj'];
  const sortedArray = stringsSort(unsortedArray);
  console.log(sortedArray);