import { e, pi, round, evaluate } from "mathjs";
//  log,
// Поиск логарифмов в поле ввода
const findLogarifm = (str) => {
    let result;
    const strIndexLn = str.indexOf("ln");
    const strIndexLg = str.indexOf("lg");
    let startIndex;
    if (strIndexLn !== -1) {
        if (strIndexLg === -1) {
            startIndex = strIndexLn;
        } else if (strIndexLg > strIndexLn) {
            startIndex = strIndexLn;
        } else {
            startIndex = strIndexLg;
        }
    } else if (strIndexLg !== -1) {
        if (strIndexLn === -1) {
            startIndex = strIndexLg;
        } else if (strIndexLn > strIndexLg) {
            startIndex = strIndexLg;
        } else {
            startIndex = strIndexLn;
        }
    } else {
        startIndex = -1;
    }
    if (startIndex !== -1) {
        let openBrackets = 0;
        let closeBrackets = 0;
        const strWithoutFirstLogarifm = str.slice(startIndex + 2);
        console.log("strWithoutFirstLogarifm", strWithoutFirstLogarifm);
        let strResult;
        for (let i = 0; i < strWithoutFirstLogarifm.length; i++) {
            if (strWithoutFirstLogarifm[i] === "(") {
                openBrackets++;
            }
            if (strWithoutFirstLogarifm[i] === ")") {
                closeBrackets++;
            }
            if (openBrackets === closeBrackets) {
                strResult = strWithoutFirstLogarifm.slice(0, i + 2);
                // console.log("strResult", strResult);
                const strResultLength = strResult.length;
                // console.log("strResultLength", strResultLength);
                const strAfterReplace = str
                    .replace("ln", `log(${strResult}, ${10})`)
                    .slice(0, -strResultLength);
                // console.log("strAfterReplace", strAfterReplace);
                str = strAfterReplace;
                break;
            }
        }
    }
    // console.log("str", str);
    if (str.indexOf("ln") !== -1) {
        // console.log("here");
        findLogarifm(str);
    } else {
        result = round(evaluate(str), 5);
    }
    // console.log("result", result);
    return result;
};

// Преобразование операторов, не трубующих дополнительные параметры
function otherOperatorConverting(str) {
    const result = str
        .replace(/π/g, `${pi}`)
        .replace(/eg{0}/g, `${e}`)
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
