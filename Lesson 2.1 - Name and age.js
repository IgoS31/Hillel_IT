let name = prompt("What is your name?");
let YOB = prompt("What is your Year Of Birth?");
let age = 2020 - Number(YOB);

if (name === null || name === "") {
    alert("Please enter your name correctly and try again");
} else if (age === 2020 || age <= 0 || isNaN(age)) {
    alert("Please enter valid age number and try again");
} else {
    alert(`${name} ${age}`);
}