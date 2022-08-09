// Проверка равенства открывающих и закрывающих скобок
export const closeBracket = (str) => {
    let openBracketAmount = 0;
    let closeBracketAmount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") openBracketAmount++;
        if (str[i] === ")") closeBracketAmount++;
    }

    if (openBracketAmount !== closeBracketAmount) {
        const differenceOfBrackets = Math.abs(
            openBracketAmount - closeBracketAmount
        );
        for (let i = 0; i < differenceOfBrackets; i++) {
            str += ")";
        }
    }
    return str;
};
