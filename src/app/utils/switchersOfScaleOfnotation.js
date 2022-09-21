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
            intermediateResult = Number(startResult);
            break;
        case "OCT":
            intermediateResult = Number(startResult);
            break;
        case "DEC":
            intermediateResult = Number(startResult);
            break;
        case "HEX":
            intermediateResult = Number(startResult);
            break;
        default:
            break;
    }

    switch (secondMeasure.shortName) {
        case "BIN":
            calculationResult = Number(intermediateResult);
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
