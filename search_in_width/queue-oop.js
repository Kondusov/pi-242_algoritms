class Queue{
    constructor(arr){
        this.item = arr;
    }
    set setter(element){
        this.item.push(element);
    }
    get getter(){
        return this.item.shift();
    }
}

let arr = [1,2,3];
let queue = new Queue(arr);

queue.setter = 1;
queue.setter = 2;
queue.getter;
console.log(queue);
console.log();
console.log();