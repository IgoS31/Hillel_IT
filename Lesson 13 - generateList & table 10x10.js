/*Написать функцию generateList.
Принимает массив из чисел и массивов чисел
Нужно сгенерировать список из элементов.
Если в массиве встречается массив,
 то нужно сделать вложенный список.
*/
function generateList(array) {
    //Array check
    if (Array.isArray(array)) {
        // unordered list declaration
        let unorderedList = document.createElement("ul");
        //cycle
        array.forEach(function(element) {
            //item and child declaration
            let item = document.createElement("li");
            let child;
            // if element is Array - recursive call -> else create a node
            if (Array.isArray(element)) {
                child = generateList(element);
            } else {
                child = document.createTextNode(element);
            }
            // append children
            item.appendChild(child);
            unorderedList.appendChild(item);
        });
        return unorderedList;
    } else {
        return array;
    }
}

//tests
document.body.appendChild(generateList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
document.body.appendChild(
    generateList([1, 2, ["2.a", "2.b", "2.c", ["2.c.1", "2.c.2"], "2.d"], 3])
);

/*Вывести таблицу 10 × 10, заполненную числами от 1 до 100*/

//declaration of table and counter
let table = document.createElement("table");
let iCount = 1;

while (iCount <= 100) {
    let tr = document.createElement("tr");
    let jCount = 1;
    //append to row
    while (jCount <= 10) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.append(iCount++);
        jCount++;
    }
    //append to table
    table.appendChild(tr);
}
//test
document.body.append(table);
