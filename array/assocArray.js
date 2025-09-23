let arrAssoc = {
    'hello': 8,
    'goodMonning' : 12,
    'bye': 18
}
arrAssoc['yes'] = 20;
function addElem(key, value){
    if(arrAssoc[key]){
        console.log('Ключ ' + key + ' ключ уже существует');
    }else{
        arrAssoc[key] = value;}
}
arrAssoc.yes = 35;
addElem('привет', 'всем');
addElem('yes', 'всем');
console.log(arrAssoc);