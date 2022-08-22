import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { temperatureMeasures } from "../../../consts/measures/temperature_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Temperature = () => {
    const initialState = ["1", "33.8"];
    const methodOfCalculation = "temperature";
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
    } = useSimpleConverter(
        temperatureMeasures,
        initialState,
        methodOfCalculation
    );

    return (
        <div className="container-inner">
            <Title title={"Температура"} />
            <Conversion
                measures={temperatureMeasures}
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

export default Temperature;
