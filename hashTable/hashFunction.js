function addElement (arr, key, val){   
    if(key in arr) {
        console.log(`${key} Уже существует`)
        return false;
    }
    else {
        arr[key] = val;
        return true;
    }
}
let arr1 = {};
addElement (arr1, 'qwe', 'rty')
addElement (arr1, 'qwe', 'irts')
console.log(arr1)