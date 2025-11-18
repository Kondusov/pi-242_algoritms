class Queue{
    constructor(arr = []){
        this.items = arr;
    }
    set setter(element){
        this.items.push(element);
    }
    get getter(){
        return this.items.shift();
    }
}

let arr = [1,2,3];
let queue = new Queue(arr);

queue.setter = 1;
queue.setter = 2;
queue.getter;
console.log(queue);

/////////далее реализуем стек
class Stack{
    constructor(arr=[]){
        this.items = arr;
    }
    set addElem(element){this.items.unshift(element)}
    get getElem(){this.items.shift()}
}
let stack = new Stack();
stack.addElem = 1;
stack.addElem = 2;
stack.addElem = 3;
console.log(stack.items)
stack.getElem;
console.log(stack.items)