//Сортируем книги по алфавиту.
// Создаем массив массивов (mas[i] = [book]), и в случае нахождения нескольких слов на одну букву,
// складываем их в один массив (mas[i].push(book)).
// после чего - перерерабатываем многомерный массив в однмерный (for (item of mas))
function Sorted(books, alpha)
{
    mas = []
    for ( book of books){
        i = 0
        while (i < alpha.length){
            //console.log(alpha[i])
            if (book[0] == alpha[i]) {
                if (mas[i] == undefined) {
                    mas[i] = [book] 
                }
                else {
                    mas[i].push(book)
                }
                console.log('найдено ' + i)
                break //помогает не перебирать весь алфавит (выходит из ближайшего цикла)
            }
            i++
        }
        //console.log(mas)
    }
    result = []
    for (item of mas) {
        if (item != undefined) {
            for (book of item) {
                result.push(book)
            }
        }
    }
    return result
}

alpha = ['А','Б','В','Г','Д']
book = ['Вечер','Дом','Булыжник','Айсберг','Галера','Бунин']
console.log(Sorted(book,alpha))