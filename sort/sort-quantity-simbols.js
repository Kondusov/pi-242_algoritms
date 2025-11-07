// Задача 5: Реализуйте сортировку выбором для массива строк. Например,
// для входного массива ["banana", "apple", "kiwi"] результат должен быть ["kiwi", "apple", "banana"].
// (отсортировали по колличеству символов)

let arr1 = ["banana", "apple", "kiwi", "kolonhoe"];
arr1.sort((a,b)=>a.length - b.length);
console.log(arr1);

function sort(arr){
    let new_arr = [];
    for(i=0; arr.length-1 >= i; i++){
        new_arr[arr[i].length] = arr[i];
    }
    return new_arr;
}
console.log(sort(arr1));

//соритровка с использованием структуры Map
function sort_assoc(arr){
    let new_arr = new Map();
    for(i=0; arr.length-1 >= i; i++){
        new_arr.set(arr[i] , arr[i].length);
    }
    return valuesArray = new_arr.keys();
}
console.log(sort_assoc(arr1));

//соритровка с использованием ассоциативного массива
function sort_assoc(arr){
    let new_arr = {};
    for(i=0; arr.length-1 >= i; i++){
        new_arr[arr[i]] = arr[i].length;
    }
    return valuesArray = Object.keys(new_arr);
}
console.log(sort_assoc(arr1));