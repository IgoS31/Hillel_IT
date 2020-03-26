/*Напишите функцию, принимающую и сравнивающую
два объекта. Если объекты содержат одинаковые
ключи и значения, то функция возвращает true,
если нет - false. */

//Objects declaration
const bmwE92 = {
    length: 1824,
    width: 735,
    BHP: 545
};

const bmwE93 = {
    length: 1824,
    width: 735,
    BHP: 545
};

const toyotaSupra = {
    length: 1756,
    width: 636,
    BHP: 313
};

function propsEquals(object1, object2) {
    //Object's properties to array lists
    let propsObj1 = Object.getOwnPropertyNames(object1);
    let propsObj2 = Object.getOwnPropertyNames(object2);
    //Check if number of properties are the same
    if (propsObj1.length !== propsObj2.length) {
        return false;
    }
    //Check if values are the same
    for (let i = 0; i < propsObj1.length; i++) {
        let value = propsObj1[i];
        if (object1[value] !== object2[value]) {
            return false;
        }
    }
    //Otherwise objects are considered to be equal
    return true;
}
//Checks
console.log(propsEquals(bmwE92, bmwE93));
console.log(propsEquals(bmwE92, toyotaSupra));
console.log(propsEquals(bmwE93, toyotaSupra));