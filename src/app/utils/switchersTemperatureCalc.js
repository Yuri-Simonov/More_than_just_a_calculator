import { evaluate } from "mathjs";

export const switcherOfTemperature = (
    firstMeasure,
    secondMeasure,
    startResult
) => {
    let calculationResult;
    let intermediateResult;

    switch (firstMeasure.shortName) {
        case "C":
            intermediateResult = Number(startResult);
            break;
        case "F":
            intermediateResult = evaluate(
                String((Number(startResult) - 32) / 1.8)
            );
            break;
        case "K":
            intermediateResult = evaluate(String(Number(startResult) - 273.15));
            break;
        case "R":
            intermediateResult = evaluate(
                String((Number(startResult) - 491.67) / 1.8)
            );
            break;
        case "Re":
            intermediateResult = evaluate(String(Number(startResult) / 0.8));
            break;
        default:
            break;
    }

    switch (secondMeasure.shortName) {
        case "C":
            calculationResult = Number(intermediateResult);
            break;
        case "F":
            calculationResult = evaluate(
                String(Number(intermediateResult) * 1.8 + 32)
            );
            break;
        case "K":
            calculationResult = evaluate(
                String(Number(intermediateResult) + 273.15)
            );
            break;
        case "R":
            calculationResult = evaluate(
                String(Number(intermediateResult) * 1.8 + 491.67)
            );
            break;
        case "Re":
            calculationResult = evaluate(
                String(Number(intermediateResult) * 0.8)
            );
            break;
        default:
            break;
    }

    return calculationResult;
};
