//Objects declaration
const oldMan = {
    name: "Alex",
    height: 175,
    age: 55,
    isRetired: true
};

const kid = {
    name: "Oleg",
    age: 12,
    gamesPlayed: {
        firstGame: "Horizon zero dawn",
        secondGame: "God of War",
        thirdGame: "Last of us"
    }
};

function deepCopy(origin) {
    //check if "origin" is Object
    if (typeof origin !== "object" || origin === null) {
        return origin;
    }
    //setting temporary object
    let target = {};

    for (let key in origin) {
        let temp = origin[key];
        //recursive deep cloning of object
        if (typeof temp === "object" && temp !== null) {
            target[key] = deepCopy(temp);
        } else {
            target[key] = temp;
        }
    }
    return target;
}

let kid2 = deepCopy(kid);
console.log(kid);
console.log(kid2);

function deepEquals(obj1, obj2) {
    //Same objects
    if (obj1 === obj2) {
        return true;
    }
    //if objects are primitives
    if (obj1 !== Object(obj1) && obj2 !== Object(obj2)) {
        return obj1 === obj2;
    }
    //if same amount of keys
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    //check each key
    for (let key in obj1) {
        //second object doesn't have this key
        if (!(key in obj2)) {
            return false;
            //Recursive call
        } else if (!deepEquals(obj1[key], obj2[key])) {
            return false;
        }
    }
    //So far objects are equal
    return true;
}

console.log(deepEquals(kid, kid2));
console.log(deepEquals(kid, oldMan));
