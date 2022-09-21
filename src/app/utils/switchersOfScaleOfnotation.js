// import { evaluate } from "mathjs";

export const switcherOfScaleOfnotation = (
    firstMeasure,
    secondMeasure,
    startResult
) => {
    let calculationResult;
    let intermediateResult;

    switch (firstMeasure.shortName) {
        case "BIN":
            intermediateResult = numberTo10(startResult, 2);
            break;
        case "OCT":
            intermediateResult = numberTo10(startResult, 8);
            break;
        case "DEC":
            intermediateResult = numberTo10(startResult, 10);
            break;
        case "HEX":
            intermediateResult = numberTo10(startResult, 16);
            break;
        default:
            break;
    }

    switch (secondMeasure.shortName) {
        case "BIN":
            calculationResult = numberTo10(startResult);
            break;
        case "OCT":
            calculationResult = Number(intermediateResult);
            break;
        case "DEC":
            calculationResult = Number(intermediateResult);
            break;
        case "HEX":
            calculationResult = Number(intermediateResult);
            break;
        default:
            break;
    }

    return calculationResult;
};

function numberTo10(value, num) {
    const timeArray = [];
    let finalNumber = 0;

    value
        .split("")
        .reverse()
        .forEach((elem) => {
            if (num === 16) {
                elem = elem
                    .replaceAll("A", 10)
                    .replaceAll("B", 11)
                    .replaceAll("C", 12)
                    .replaceAll("D", 13)
                    .replaceAll("E", 14)
                    .replaceAll("F", 15);
            }

            timeArray.push(elem);
        });

    for (let i = 0; i < timeArray.length; i++) {
        finalNumber += timeArray[i] * num ** i;
    }

    return finalNumber;
}
