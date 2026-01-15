// Задача 10: Напишите функцию, которая проверяет сбалансированна строка или нет.
// Например, если в тексте скобка была открыта и далее по тексту - закрыта, то вернуть - true, а иначе — false.
function isBalanced(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // Проверяем, является ли символ открывающей скобкой
        if ('([{'.includes(char)) {
            stack.push(char);
        } 
        // Проверяем, является ли символ закрывающей скобкой
        else if (char in pairs) {
            // Если стек пуст или скобка не совпадает с последней открытой
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // Если стек пуст, значит все скобки закрыты правильно
    return stack.length === 0;
}

// Тесты
console.log(isBalanced("()[]{}"));    // true
console.log(isBalanced("(]"));        // false
console.log(isBalanced("([{}])"));    // true
console.log(isBalanced("((())"));     // false
console.log(isBalanced("hello (world)")); // true
