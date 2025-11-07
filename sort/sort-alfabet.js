// Задача 6: Реализуйте сортировку выбором для массива строк. Например,
// для входного массива ["banana", "apple", "kiwi"] результат должен быть ["apple", "banana", "kiwi"].
// (отсортировали по алфавиту)
function sortAlfabet(arr, Alfabet){
    let new_arr = [];
    arr.forEach(function(word) {
        let simbol = word.slice(0,1);
        Alfabet.forEach(function(element) {
            if(element == simbol){
                new_arr.push = word;
            }
        });
        console.log(element);
      });
      return new_arr;
    }
let Alfabet = ['a','b','c' , 'd' , 'f'];
arr1 = ["banana", "apple", "kiwi"];
console.log(sortAlfabet(arr1));
