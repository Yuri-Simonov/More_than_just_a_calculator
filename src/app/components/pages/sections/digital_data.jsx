import React from "react";
import { useDigitalData } from "../../../hooks/useDigitalData";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";

const DigitalData = () => {
    const {
        digitalDataMeasures,
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeValue,
        clearResultValues,
        deleteLastResultSymbol
    } = useDigitalData();

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
            <SimplePanel
                changeValue={changeValue}
                deleteAllSymbols={clearResultValues}
                deleteLastSymbol={deleteLastResultSymbol}
            />
        </div>
    );
};

export default DigitalData;
