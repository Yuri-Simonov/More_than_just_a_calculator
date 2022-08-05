import { e, pi, log } from "mathjs";

// Замена содержимого внутри скобок логарифма на понятные значения для библиотеки mathjs
const changeLogarifmValue = (str, i, kind, base) => {
    const newStrValue = str.slice(i);
    let openBracketAmount = 0;
    let closeBracketAmount = 0;
    for (let i = 0; i < newStrValue.length; i++) {
        if (newStrValue[i] === "(") openBracketAmount++;
        if (newStrValue[i] === ")") closeBracketAmount++;
        if (openBracketAmount === closeBracketAmount) {
            const startLogarifmIndex = newStrValue.indexOf("(");
            const endLogarifmIndex = newStrValue.lastIndexOf(")");
            const findedLogarifmValue = newStrValue.slice(
                startLogarifmIndex + 1,
                endLogarifmIndex
            );
            const strAfterReplace = str
                .replace(kind, `${log(findedLogarifmValue, base)}`)
                .slice(0, -4);
            return strAfterReplace;
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

// Преобразование нестандартных операторов в понятные операторы для JS
export const converting = (str) => {
    const strAfterLogarifms = findLogarifm(str);
    const timeValue = strAfterLogarifms
        .replace(/π/g, `${pi}`)
        .replace(/^e/g, `${e}`)
        .replace(/arcsin/g, "asin")
        .replace(/arccos/g, "acos")
        .replace(/arctan/g, "atan");
    // console.log("timeValue", timeValue);
    return timeValue;
};
