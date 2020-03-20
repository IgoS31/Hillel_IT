let userName = prompt("What is your name?");
let userAge = prompt("What is your age?");
let userIsDrinker = confirm("Do you drink alcohol?");

if (userIsDrinker === false) {
    console.log("Great! Keep it up! ^^");
} else {
    if (userAge < 0 || isNaN(userAge)) {
        console.log("Your age number is wrong, try again");
    } else {
        if (userAge < 18) {
            console.log("I'll tell your mommy!!!");
        } else if (userAge >= 18 && userAge < 40) {
            console.log("Don't mix beer and vodka ;)");
        } else {
            console.log("Drink responsible :)");
        }
    }
}
