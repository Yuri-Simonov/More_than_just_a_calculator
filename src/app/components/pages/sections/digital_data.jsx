import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { digitalDataMeasures } from "../../../consts/measures/digital_data_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const DigitalData = () => {
    const initialState = ["1", "1024"];

    const {
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeValue,
        clearResultValues,
        deleteLastResultSymbol,
        changeActiveField,
        activeField
    } = useSimpleConverter(digitalDataMeasures, initialState);

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
                toggleActiveField={changeActiveField}
                activeField={activeField}
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
