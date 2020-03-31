/*Написать функцию, которая принимает один параметр.
При первом вызове, она его запоминает,
при втором - суммирует переданный параметр с тем,
что передали первый раз и так далее.
Всё это с замыканиями.*/

let sumCounter = sum();

function sum() {
    let sum = 0;
    return function(number) {
        return (sum += number);
    };
}

//Tests
console.log(sumCounter(5));
console.log(sumCounter(20));
console.log(sumCounter(22));