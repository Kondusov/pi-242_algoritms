class DataStore {
    constructor() {
        // Внутреннее хранилище данных (используем обычный объект JS как ассоциативный массив)
        this.data = {};
    }

    /**
     * Добавляет новую пару ключ-значение в хранилище.
     * @param {string|number} key - Уникальный ключ.
     * @param {*} val - Значение.
     * @returns {boolean} true, если добавление прошло успешно, false, если ключ уже существует.
     */
    addElement(key, val) {
        if (key in this.data) {
            console.log(`${key} Уже существует`);
            return false;
        } else {
            this.data[key] = val;
            return true;
        }
    }
    
    /**
     * Вспомогательный метод для получения значения (опционально)
     */
    get(key) {
        return this.data[key];
    }
}

// --- Пример использования ---

const myStore = new DataStore();

console.log("Попытка добавить 'user1':", myStore.addElement("user1", "Alice")); // true
console.log("Попытка добавить 'user2':", myStore.addElement("user2", "Bob"));   // true
console.log("Попытка добавить 'user1' еще раз:", myStore.addElement("user1", "Charlie")); // user1 Уже существует, false
console.log("Попытка прочитать элемент 'user1'", myStore.get("user1")); // Вернет Alice

console.log("\nТекущее содержимое хранилища:", myStore.data);
// Вывод: Текущее содержимое хранилища: { user1: 'Alice', user2: 'Bob' }