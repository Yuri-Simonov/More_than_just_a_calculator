import React, { useState } from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";

const DigitalData = () => {
    const digitalDataMeasures = [
        { shortName: "Б", fullName: "Байт", size: 1 },
        { shortName: "КБ", fullName: "Килобайт", size: 1024 ** 0 },
        { shortName: "МБ", fullName: "Мегабайт", size: 1024 ** 1 },
        { shortName: "ГБ", fullName: "Гигабайт", size: 1024 ** 2 },
        { shortName: "ТБ", fullName: "Терабайт", size: 1024 ** 3 },
        { shortName: "ПБ", fullName: "Петабайт", size: 1024 ** 4 }
    ];

    const [firstSelect, setFirstSelect] = useState(
        digitalDataMeasures[0].shortName
    );
    const [secondSelect, setSecondSelect] = useState(
        digitalDataMeasures[1].shortName
    );
    const calculation = (firstMeaseure, secondMeasure) => {
        return 1;
    };
    const changeSelectValue = (id, value) => {
        if (id === "first") setFirstSelect(value);
        if (id === "second") setSecondSelect(value);
        calculation(firstSelect, secondSelect);
    };

    return (
        <div className="container-inner">
            <Title title={"Данные"} />
            <Conversion
                measures={digitalDataMeasures}
                toggleSelect={changeSelectValue}
                firstValue={firstSelect}
                secondValue={secondSelect}
            />
            <SimplePanel />
        </div>
    );
};

export default DigitalData;
