// 1. Динамическое программирование (0/1 Knapsack)
// Это наиболее эффективный способ для целочисленных весов.
// Идея: Создаем 2D-массив dp[i][w], где dp[i][w] хранит максимальную стоимость
// с первыми i предметами и весом w.
// Логика: Для каждого предмета и веса есть два варианта:
// Не брать предмет: dp[i-1][w]
// Взять предмет (если помещается): cost[i] + dp[i-1][w - weight[i]]
// dp[i][w] = Math.max(не взять, взять)
// Пример структуры на JS:

function knapsack(weights, costs, capacity) {
    const n = weights.length;
    let dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i-1] <= w) {
                // Можно взять предмет
                dp[i][w] = Math.max(
                    costs[i-1] + dp[i-1][w - weights[i-1]], // Взять
                    dp[i-1][w] // Не брать
                );
            } else {
                // Не помещается
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity]; // Максимальная стоимость
}
