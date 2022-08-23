const weightMeasures = [
    { shortName: "кг", fullName: "Килограмм", size: 1 },
    { shortName: "lb", fullName: "Фунт", size: 0.453592 }
];

const lengthMeasures = [
    { shortName: "м", fullName: "Метры", size: 1 },
    { shortName: "см", fullName: "Сантиметры", size: 1e-2 },
    { shortName: "ft", fullName: "Футы", size: 0.3048 },
    { shortName: "in", fullName: "Дюймы", size: 0.0254 }
];

export const bodyWeightMeterMeasures = [weightMeasures, lengthMeasures];
