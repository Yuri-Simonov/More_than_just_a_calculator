import React, { useState, useEffect } from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";

const DigitalData = () => {
    const digitalDataMeasures = [
        { shortName: "Б", fullName: "Байт", size: 1024 ** 1 },
        { shortName: "КБ", fullName: "Килобайт", size: 1024 ** 2 },
        { shortName: "МБ", fullName: "Мегабайт", size: 1024 ** 3 },
        { shortName: "ГБ", fullName: "Гигабайт", size: 1024 ** 4 },
        { shortName: "ТБ", fullName: "Терабайт", size: 1024 ** 5 },
        { shortName: "ПБ", fullName: "Петабайт", size: 1024 ** 6 }
    ];
    // Состояние первого селекта
    const [firstSelect, setFirstSelect] = useState(digitalDataMeasures[0]);
    // Состояние второго селекта
    const [secondSelect, setSecondSelect] = useState(digitalDataMeasures[1]);
    // Состояние первого результата
    const [firstResult, setFirstResult] = useState(1);
    // Состояние второго результата
    const [secondResult, setSecondResult] = useState(1024);

    const changeValue = (btnValue) => {
        setFirstResult((prevState) => Number(prevState + btnValue));
    };

    const calculation = (firstMeaseure, secondMeasure) => {
        const calculationResult =
            (firstResult * firstMeaseure.size) / secondMeasure.size;

        setSecondResult(calculationResult);
    };

    useEffect(() => {
        calculation(firstSelect, secondSelect);
    }, [firstSelect, secondSelect, firstResult, secondResult]);
    const changeSelectValue = (id, value) => {
        if (id === "first") {
            digitalDataMeasures.forEach((elem) => {
                if (value === elem.shortName) setFirstSelect(elem);
            });
        }
        if (id === "second") {
            digitalDataMeasures.forEach((elem) => {
                if (value === elem.shortName) setSecondSelect(elem);
            });
        }
        calculation(firstSelect, secondSelect);
    };

    return (
        <div className="container-inner">
            <Title title={"Данные"} />
            <Conversion
                measures={digitalDataMeasures}
                toggleSelect={changeSelectValue}
                firstSelectValue={firstSelect}
                secondSelectValue={secondSelect}
                firstResultValue={firstResult}
                secondResultValue={secondResult}
            />
            <SimplePanel changeValue={changeValue} />
        </div>
    );
};

export default DigitalData;
