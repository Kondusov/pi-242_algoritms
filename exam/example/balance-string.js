// Задача 10: Напишите функцию, которая проверяет сбалансированна строка или нет.
// Например, если в тексте скобка была открыта и далее по тексту - закрыта, то вернуть - true, а иначе — false.
function balance(str){
    arr = str.split('');
    result = 0;
    for(key in arr){
        let symbol = arr[key];
        if(symbol == '('){result+=1};
        if(symbol == ')') result-=1;
    }
    if(result == 0) return true;
    else return result;
}
let text = 'Первый метод — str.indexOf(substr, pos). Он ищет подстроку ';
let bad_text = 'Первый метод — str.indexOf(substr, pos. Он ищет подстроку ';
console.log(balance(text));
console.log(balance(bad_text));

//альтернативная запись
function Balanced(str) {
    let balanc = 0;
    for (char of str) {
      if (char == '(') balanc++;
      if (char == ')') balanc--;
    }
    return balanc == 0;
  }
  console.log(Balanced("(asdasd(sdsadas)asdasd)кеуекуекуе((фывфывфыв((ыфвфывф)))фывыфвыфв)"));
  //END альтернативная запись