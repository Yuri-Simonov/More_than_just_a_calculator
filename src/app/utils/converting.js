import { e, pi } from "mathjs";

// Преобразование нестандартных операторов в понятные операторы для JS
export const converting = (str) => {
    const timeValue = str
        .replace(/π/g, `${pi}`)
        .replace(/^e/g, `${e}`)
        .replace(/arcsin/g, "asin")
        .replace(/arccos/g, "acos")
        .replace(/arctan/g, "atan");
    // console.log("timeValue", timeValue);
    return timeValue;
};
