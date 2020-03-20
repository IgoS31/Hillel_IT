let aNumber = Number(prompt("Enter 'a' number"));
let bNumber = Number(prompt("Enter 'b' number"));
let cNumber = Number(prompt("Enter 'c' number"));

let averageNumber = aNumber + bNumber + cNumber / 3;

if (isNaN(averageNumber)) {
    console.log("Type in correct values next time");
} else {
    console.log(`Your average number is ${averageNumber}`);
}