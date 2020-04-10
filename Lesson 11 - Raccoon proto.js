/*Реализовать наследования следующей цепочки: 
Животное -> Млекопитающее -> Енот
Между этими прослойками можно создать еще несколько своих.
Прототип животного должен иметь 2 метода передвижения 
(прыжок и бег) и свойство пол. 
Прототип млекопитающего должен иметь метод, 
который, в зависимости от пола дает молоко. 
Прототип енота должен уметь воровать =)
*/

let Animal = {
    sex: "male",

    run() {
        console.log("Running");
    },

    jump() {
        console.log("Jumping");
    }
};

let Mammal = {
    __proto__: Animal,

    givesMilk() {
        this.sex === "male"
            ? console.log("Gives no milk")
            : console.log("Gives milk");
    }
};

let Raccoon = {
    __proto__: Mammal,

    stealing() {
        console.log("Raccoon stole your food!");
    }
};

console.log(Raccoon.sex);
Raccoon.run();
Raccoon.jump();
Raccoon.givesMilk();
Raccoon.stealing();
