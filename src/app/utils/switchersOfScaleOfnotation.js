export const switcherOfScaleOfnotation = (
    firstMeasure,
    secondMeasure,
    startResult
) => {
    const from = switcher(firstMeasure);
    const to = switcher(secondMeasure);
    return parseInt(startResult, from).toString(to).toUpperCase();
};

function switcher(data) {
    switch (data.shortName) {
        case "BIN":
            return 2;
        case "OCT":
            return 8;
        case "DEC":
            return 10;
        case "HEX":
            return 16;
        default:
            break;
    }
}
