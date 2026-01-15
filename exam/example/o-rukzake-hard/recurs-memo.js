// Рекурсия с мемоизацией (Тоже ДП, но сверху вниз)
// Идея: Рекурсивная функция, которая пытается взять или не взять предмет,
//  сохраняя результаты в кэше (объекте или Map) для избежания повторных вычислений.
// Плюсы: Часто более интуитивно понятна, чем итеративное ДП.

function knapsackMemo(weights, costs, capacity, n, memo = {}) {
    const key = `${n}-${capacity}`;
    if (n === 0 || capacity === 0) return 0;
    if (memo[key] !== undefined) return memo[key];

    if (weights[n-1] > capacity) {
        // Не помещается
        return memo[key] = knapsackMemo(weights, costs, capacity, n-1, memo);
    } else {
        // Максимум из (взять + остаток) и (не брать)
        return memo[key] = Math.max(
            costs[n-1] + knapsackMemo(weights, costs, capacity - weights[n-1], n-1, memo),
            knapsackMemo(weights, costs, capacity, n-1, memo)
        );
    }
}
