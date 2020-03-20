/*Игра “Угадай число”.
Сгенерировать случайное число в диапазоне от 0 до 10.
Пользователь должен угадать число.
Игра продолжается до тех пор, пока пользователь
не угадает число.
Пользователь может остановить игру в любой момент.*/

let randomNumber = Math.floor(Math.random() * 11);
let userNumber;

while (true) {
    userNumber = prompt("Enter 0 to 10 number");
    if (userNumber < 0 || userNumber > 10) {
        console.log("Please, enter number within range!");
    } else if (isNaN(userNumber)) {
        console.log("Not a number, please try again!");
    } else if (userNumber == randomNumber) {
        console.log("Congratulations, you won!");
        break;
    } else if (userNumber === null) {
        console.log("See you and better luck next time!");
        break;
    } else if (userNumber !== randomNumber) {
        alert("Try another number!");
    }
}
