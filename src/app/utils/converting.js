import { e, pi } from "mathjs";

// Преобразование нестандартных операторов в понятные операторы для JS
export const converting = (str) => {
    const timeValue = str.replace(/^π$/g, ` ${pi} `).replace(/^e$/g, ` ${e} `);
    // .replace(/[√ | &#8730;]/g, ` ${sqrt(2)} `);
    // console.log("timeValue", timeValue);
    return timeValue;
};
