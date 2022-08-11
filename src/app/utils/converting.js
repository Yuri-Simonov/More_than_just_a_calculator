import { e, pi, log, round, evaluate } from "mathjs";

// Замена содержимого внутри скобок логарифма на понятные значения для библиотеки mathjs
const changeLogarifmValue = (str, i, kind, base) => {
    console.log("str", str);
    let openBracketAmount = 0;
    let closeBracketAmount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") openBracketAmount++;
        if (str[i] === ")") closeBracketAmount++;
        if (openBracketAmount === closeBracketAmount) {
            const startLogarifmIndex = str.indexOf("(");
            const endLogarifmIndex = str.lastIndexOf(")");
            // Поиск содержимого внутри логарифма
            const findedLogarifmValue = str.slice(
                startLogarifmIndex + 1,
                endLogarifmIndex
            );
            const strAfterOtherConverting =
                otherOperatorConverting(findedLogarifmValue);

            // Проверка есть ли еще логарифмы внутри логарифма
            const checkOtherLogarifms = findLogarifm(strAfterOtherConverting);
            //============================================================================
            //============================================================================
            //============================================================================

            // Результат логарифма # log(someValue, base)
            const strAfterReplace = str.replace(
                kind,
                `${log(round(evaluate(checkOtherLogarifms), 5), base)}`
            ); // Вот тут косяк, т.к. вид логарифма заменяется на "log(value), т.е. вид логарифма + его содержимое"

            //============================================================================
            //============================================================================
            //============================================================================
            // Поиск base в функции log
            const findBaseInTheEndOfValue = strAfterReplace.indexOf("(");
            // Удаление мешающей для корректного вычисления части base
            const sliceTimeConst = strAfterReplace.slice(
                0,
                findBaseInTheEndOfValue
            );
            console.log("strAfterReplace", strAfterReplace);
            return sliceTimeConst;
        }
    }
};

// Поиск логарифмов в поле ввода
const findLogarifm = (str) => {
    const strIndexLn = str.indexOf("ln");
    const strIndexLg = str.indexOf("lg");
    if (strIndexLn !== -1) {
        return changeLogarifmValue(str, strIndexLn, "ln", e);
    }
    if (strIndexLg !== -1) {
        return changeLogarifmValue(str, strIndexLg, "lg", 10);
    }
    return str;
};

// Преобразование операторов, не трубующих дополнительные параметры
function otherOperatorConverting(str) {
    const result = str
        .replace(/π/g, `${pi}`)
        .replace(/e^\W/g, `${e}`)
        .replace(/√/g, `sqrt`)
        .replace(/arcsin/g, "asin")
        .replace(/arccos/g, "acos")
        .replace(/arctan/g, "atan");
    return result;
}

// Преобразование нестандартных операторов в понятные операторы для JS
export const converting = (str) => {
    const strAfterLogarifms = findLogarifm(str);
    const timeValue = otherOperatorConverting(strAfterLogarifms);
    return timeValue;
};
