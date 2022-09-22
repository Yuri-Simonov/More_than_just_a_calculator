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
            intermediateResult = Number(startResult);
            break;
        case "HEX":
            intermediateResult = numberTo10(startResult, 16);
            break;
        default:
            break;
    }

    switch (secondMeasure.shortName) {
        case "BIN":
            calculationResult = numberFrom10(intermediateResult, 2);
            break;
        case "OCT":
            calculationResult = numberFrom10(intermediateResult, 8);
            break;
        case "DEC":
            calculationResult = Number(intermediateResult);
            break;
        case "HEX":
            calculationResult = numberFrom10(intermediateResult, 16);
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

function numberFrom10(value, num) {
    let timeNumber = value;
    let timeString = "";
    let currentRest = 0;

    if (value > 0) {
        /* eslint no-unreachable-loop: ["error", { ignore: ["WhileStatement"] }] */
        while (timeNumber >= 1) {
            currentRest = timeNumber % num;
            if (timeNumber % num === 0) {
                timeNumber /= num;
            } else {
                timeNumber = (timeNumber - currentRest) / num;
            }
            if (num === 16) {
                switch (currentRest) {
                    case 10:
                        timeString += "A";
                        break;
                    case 11:
                        timeString += "B";
                        break;
                    case 12:
                        timeString += "C";
                        break;
                    case 13:
                        timeString += "D";
                        break;
                    case 14:
                        timeString += "E";
                        break;
                    case 15:
                        timeString += "F";
                        break;
                    default:
                        timeString += currentRest;
                        break;
                }
            } else {
                timeString += currentRest;
            }
        }
    } else {
        timeString = "0";
    }
    const finalString = timeString.split("").reverse().join("");
    return finalString;
}
