let arrAssoc = {
    'https://www.google.com/=ef5c9cfd86438e8a&udm': 'C:\Users\work\Downloads',
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
   addElem('привет', '157')
console.log(arrAssoc);