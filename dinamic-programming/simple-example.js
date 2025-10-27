// Наивная рекурсивная реализация - НЕ рекомендуется для больших n
function fibonacciRecursive(n) {
    if (n <= 1) {
        console.log('базовый случай n= '+ n);
        return n;
    }
    console.log(n);
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    //011235
}
//console.log(fibonacciRecursive(5));
// Динамическое программирование с мемоизацией
function fibonacciMemo(n, memo = {}) {
    // Базовые случаи
    if (n <= 1) {
        console.log('вывод из базового случая n = '+ n);
        return n;
    }
    
    // Если результат уже вычислен, возвращаем его из кэша
    if (memo[n] !== undefined) {
        console.log('вывод из memo n = '+ n);
        return memo[n];
    }
    
    // Вычисляем результат и сохраняем в кэш
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    console.log('вывод текущего n = '+ n);
    console.log('рекурсивный вывод из memo[n] = '+ memo[n]);
    return memo[n];
}
console.log(fibonacciMemo(5));