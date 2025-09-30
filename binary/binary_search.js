function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Находим середину
    const mid = Math.floor((left + right) / 2);

    // Если значение в середине совпадает с искомым
    if (arr[mid] === target) {
      return mid; // Возвращаем индекс
    }
    // Если искомое значение больше значения в середине
    else if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    }
    // Если искомое значение меньше значения в середине
    else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  // Если значение не найдено
  return -1;
}

// Пример использования:
const sortedArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const targetValue = 30;
const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Элемент ${targetValue} найден по индексу: ${index}`); // Вывод: Элемент 30 найден по индексу: 5
} else {
  console.log(`Элемент ${targetValue} не найден в массиве.`);
}

const notFoundValue = 100;
const notFoundIndex = binarySearch(sortedArray, notFoundValue);
console.log(`Элемент ${notFoundValue} найден по индексу: ${notFoundIndex}`); // Вывод: Элемент 100 найден по индексу: -1