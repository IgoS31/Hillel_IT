/* Юнит - один солдат армии. При создании получает тип,
показатель текущего здоровье,
максимально возможное здоровье и дистанцию,
на которую способен переместиться.

isReadyToMove - функция принимает один параметр - дистанцию,
которую нужно пройти юниту. Функция должна проверить
способен ли юнит пройти указанную дистанцию.
isReadyToFight - функция, проверяющая способен ли юнит
сражаться. Юнит способен сражаться если его текущее здоровье
составляет хотя бы половину от максимально возможного.
restore - функция, которая проверяет был ли ранен юнит.
Если был, то восстанавливает здоровье до максимального.
clone - функция возвращает копию юнита.
*/

function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(distance) {
    return distance <= this.maxDistance;
};

Unit.prototype.isReadyToFight = function() {
    return this.health > this.maxHealth / 2;
};

Unit.prototype.restore = function() {
    if (this.health < this.maxHealth) this.health = this.maxHealth;
};

Unit.prototype.clone = function() {
    return new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
};

/*Армия - набор юнитов. При создании получает опциональный
параметр - массив юнитов. Если его передали, то все юниты
добавляются к уже существующим в армии.

isReadyToMove - функция принимает один параметр -
дистанцию, которую нужно пройти армии. Армия способна
пройти дистанцию если все юниты способны пройти дистанцию.
isReadyToFight -  функция, проверяющая способна ли армия
сражаться. Армия способна сражаться если все юниты
способны сражаться.
restore - проверка здоровья всех юнитов.
Функция восстанавливает здоровье всех раненых юнитов.
getReadyToMoveUnits - функция принимает один параметр -
дистанцию, которую нужно пройти армии. Возвращает массив
юнитов, которые способны пройти эту дистанцию.
combineUnits - функция принимает массив юнитов как параметр.
Добавляет всех юнитов из этого массива к массиву
собственных юнитов.
cloneUnit - принимает порядковый номер юнита, которого
нужно скопировать. Возвращает копию юнита.*/

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function(distance) {
    return this.units.every(unit => unit.isReadyToMove(distance));
};

Army.prototype.isReadyToFight = function() {
    return this.units.every(unit => unit.isReadyToFight());
};

Army.prototype.restore = function() {
    this.units.forEach(unit => unit.restore());
};

Army.prototype.getReadyToMoveUnits = function(distance) {
    return this.units.filter(unit => unit.isReadyToMove(distance));
};

Army.prototype.combineUnits = function(newUnits) {
    this.units = this.units.concat(newUnits);
};

Army.prototype.cloneUnit = function(unitIndex) {
    for (let key in this.units) {
        if (this.units[key] === this.units[unitIndex]) {
            return this.units[key].clone();
        }
    }
};

//Small war test :)
let warlord = new Unit("warlord", 100, 100, 300);
let knight = new Unit("knight", 50, 50, 200);
let archer = new Unit("archer", 80, 80, 100);
let wizard = new Unit("wizard", 20, 20, 180);
//Unit test
console.log(`Warlord ready to move 250: ` + warlord.isReadyToMove(250));
console.log(`Knight ready to move 250: ` + knight.isReadyToMove(250));
console.log(`Archer is ready to fight: ` + archer.isReadyToFight());
console.log(`Wizard damaged: -15`);
wizard.health = wizard.health - 15;
console.log(`Wizard is ready to fight: ` + wizard.isReadyToFight());
console.log("Wizard healed");
wizard.restore();
console.log(`Wizard health level: ` + wizard.health);
console.log(`Wizard is ready to fight: ` + wizard.isReadyToFight());
console.log(`Warlord cloned`);
console.log(warlord.clone());
console.log("Units attacked");
warlord.health = warlord.health - 50;
console.log(`Warlord damaged: -50`);
knight.health = knight.health - 25;
console.log(`Knight damaged: -25`);
//Army test
let meleeArmy = [warlord, knight];
let rangeArmy = [archer, wizard];
let army = new Army(meleeArmy);
army.combineUnits(rangeArmy);
console.log("Created army of 4 units: ");
console.log(army);
console.log(`Army is ready to move 250: ` + army.isReadyToMove(250));
console.log(`Army is ready to fight: ` + army.isReadyToFight());
console.log(`1 unit is able to move 250: `);
console.log(army.getReadyToMoveUnits(250));
console.log(`Healing army`);
army.restore();
console.log(`Army is ready to fight: ` + army.isReadyToFight());
console.log(`Cloning archer`);
console.log(army.cloneUnit(2));