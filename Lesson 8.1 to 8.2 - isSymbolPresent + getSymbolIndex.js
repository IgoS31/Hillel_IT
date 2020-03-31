/*Написать функцию isSymbolPresentInString(str, symbol)
возвращает true если символ найден в строке и
false если нет.

Написать функцию getSymbolIndex(str, symbol)
возвращает индекс первого найденного символа в строк,
или -1 если символ не найден*/

function isSymbolPresentInString(str, symbol) {
    return str.split("").includes(symbol);
}

function getSymbolIndex(str, symbol) {
    return str.split("").findIndex(currentValue => currentValue === symbol);
}

//tests
console.log(isSymbolPresentInString("acegikmoqsuwy134680", "i"));
console.log(isSymbolPresentInString("acegikmoqsuwy134680", "b"));
console.log(getSymbolIndex("abcdefgabc", "c"));
console.log(getSymbolIndex("abcdefgabc", "11"));
