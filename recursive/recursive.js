function factorial(n) {
  // Базовое условие: если n равно 0 или 1, возвращаем 1
  if (n <= 1) {
    return 1;
  }
  // Рекурсивный вызов: n умножается на факториал n-1
  else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); // Вывод: 24