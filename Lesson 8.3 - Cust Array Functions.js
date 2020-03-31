/*Написать собственную реализацию функций
forEach, map, filter, some, every.
Каждая функция должна принимать два аргумента
массив и callback функцию. Все функции, кроме forEach,
должны вернуть результат.*/

function forEachC(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array);
    }
}

function mapC(array, callBack) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        results.push(callBack(array[i], i, array));
    }
    return results;
}

function filterC(array, callBack) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            results.push(array[i]);
        }
    }
    return results;
}

function someC(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function everyC(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        if (!callBack(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

//Tests:
//Declaration
let colours = ["Green", "Yellow", "Black"];
let names = ["Peter", "Gregory", "Austin"];
let numbers = [87, -4, 22, 7, -45];
//forEach test
forEachC(colours, function(item, index, arr) {
    console.log(index + ": item " + item + " of array:" + arr);
});
//map test
console.log(mapC(names, name => name.length));
//filter test
console.log(filterC(numbers, number => number < 0));
//some test
console.log(someC(numbers, number => number > 0));
//every test
console.log(everyC(numbers, number => number > 0));