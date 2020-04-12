/*Реализовать наследования следующей цепочки: 
Животное -> Млекопитающее -> Енот
Между этими прослойками можно создать еще несколько своих.
Прототип животного должен иметь 2 метода передвижения 
(прыжок и бег) и свойство пол. 
Прототип млекопитающего должен иметь метод, 
который, в зависимости от пола дает молоко. 
Прототип енота должен уметь воровать =)
*/

function Animal(sex) {
  this.sex = sex;
}

Animal.prototype.run = function() {
  console.log("Running");
};

Animal.prototype.jump = function() {
  console.log("Jumping");
};

function Mammal(sex) {
  Animal.call(this, sex);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.givesMilk = function() {
  this.sex === "male"
    ? console.log("Gives no milk")
    : console.log("Gives milk");
};

function Raccoon(sex) {
  Mammal.call(this, sex);
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.stealing = function() {
  console.log("Raccoon stole your food!");
};

//tests
let enotAnton = new Raccoon("male");
let enotihaValeria = new Raccoon("female");
enotAnton.run();
enotAnton.jump();
enotAnton.givesMilk();
enotihaValeria.givesMilk();
enotAnton.stealing();
