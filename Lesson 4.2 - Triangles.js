/*4.2 Запросить у пользователя число,
которое будет высотой вершины
прямоугольного треугольника.
Вывести треугольник двумя способами*/

// Setting up global variables
let height = +prompt("Enter triangle height");
let triangle = "";
let result = "";

// Input validity check
if (isNaN(height)) {
    console.log("Not a valid value");
} else {
    // 4.2.2 Построчно через console.log
    for (let i = 0; i < height; i++) {
        triangle += "*";
        console.log(triangle);
    }
    // Setting triangle var to ""
    triangle = "";

    //4.2.1 Одной строкой
    for (let i = 0; i < height; i++) {
        triangle += "*";
        result += "\n" + triangle;
    }
    console.log(result);
}
