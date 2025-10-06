class Node {
  constructor(data, next = null) {
    this.data = data; // Данные, хранящиеся в узле
    this.next = next; // Ссылка на следующий узел
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Голова списка (первый узел)
    this.tail = null; // Хвост списка (последний узел)
  }

  // Метод для добавления элемента в конец списка
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // Если список пуст, новый узел становится и головой, и хвостом
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Если список не пуст, добавляем новый узел к хвосту
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Метод для вывода данных списка
  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.append(30);

myLinkedList.print(); // Выведет: 10 -> 20 -> 30