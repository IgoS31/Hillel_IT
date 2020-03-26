/*Написать функцию copy(target, origin), которая копирует 
свойства из объекта origin в объект target и возвращает 
новый объект со всеми свойствами. В данном задании 
используйте for ... in для работы со свойствами объектов.*/

//Objects declaration
const oldMan = {
    name: "Alex",
    height: 175,
    age: 55,
    isRetired : true,
};

const youngMan = {
    name: "Valeriy",
    height: 181,
    age:18,
};

const kid = {
    name: "Oleg",
    age: 12,
    gamesPlayed:{
        firstGame: "Horizon zero dawn",
        secondGame: "God of War",
        thirdGame: "Last of us",
    }
}

function shallowClone(target, origin){
//check if "origin" is Object
    if (typeof origin !== "object" || origin === null){
        return origin;
    } else {
//setting temporary object
        let tempObject = {};
// copy "target" object to "temp" object
        for (let key in target){
            tempObject[key] = target[key];
        }
//copy "origin" object to "temp" object
        for (let key in origin){
            tempObject[key] = origin[key];
        }
        return tempObject;
    }
}
//tests
console.log(shallowClone(oldMan, 1));
console.log(shallowClone(oldMan, youngMan));
console.log(Object.assign(oldMan, youngMan));

/* Recursive function*/
function deepCopyFunction (origin) {
//check if "origin" is Object
    if(typeof origin !== "object" || origin === null) {
        return origin;
    }
//setting temporary object
    let target = {};
//Props cycle check
    for (let key in origin) {
        let temp = origin[key];
//recursive deep cloning of object  
        if (typeof temp === "object" && temp !== null){
            target[key] = deepCopyFunction(temp);
        } else {
            target[key] = temp;
        }
    }
    return target;
}
//test
console.log(deepCopyFunction(kid));