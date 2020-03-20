//1. Написать функцию, которая вычисляет площадь круга
function getCircleArea(radius) {
    return 3.14 * radius ** 2;
}
//2. Написать функцию, которая вычисляет длину окружности
function getCircleLength(radius) {
    return 2 * 3.14 * radius;
}
/*3.Написать функцию, которая вычисляет
среднее арифметическое двух чисел.*/
function averageNumber(aNumber, bNumber) {
    return (aNumber + bNumber) / 2;
}
/*Написать функцию calc(x, y, action),
которая получает 3 аргумента*/
function calc(aNumber, bNumber, action) {
    switch (action) {
        case "+":
            return aNumber + bNumber;
        case "-":
            return aNumber - bNumber;
        case "*":
            return aNumber * bNumber;
        case "/":
            return aNumber / bNumber;
        case "%":
            return aNumber % bNumber;
        case "^":
            return aNumber ** bNumber;
        default:
            console.log("Wrong action or number");
            break;
    }
}
// tests
console.log(`Circle area:` + getCircleArea(5));
console.log(`Circle length:` + getCircleLength(7));
console.log(`Average number:` + averageNumber(5, 15));
console.log(`Sum:` + calc(9, 4, "+"));
console.log(`Sub:` + calc(9, 4, "-"));
console.log(`Mult:` + calc(9, 4, "*"));
console.log(`Div:` + calc(9, 4, "/"));
console.log(`Modu:` + calc(9, 4, "%"));
console.log(`Pow:` + calc(9, 4, "^"));