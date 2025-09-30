function addElem(arr, val){
    arr.push(val)
    console.log(arr)
}
function getElem(arr){
    if(arr.length > 0){
        arr.shift()
        console.log(arr)
        }
}
function get_set_Elem(arr, val){
    if(val != undefined){
        arr.push(val)
        console.log(arr)
    }else{
        if(arr.length > 0){
            arr.shift()
            console.log(arr)
        }
    }
}
let arr1 = [1,2,3]
get_set_Elem(arr1, 4);
get_set_Elem(arr1, 5);
get_set_Elem(arr1);
get_set_Elem(arr1);
// addElem(arr1, 4)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)
// getElem(arr1)
// addElem(arr1, 5)