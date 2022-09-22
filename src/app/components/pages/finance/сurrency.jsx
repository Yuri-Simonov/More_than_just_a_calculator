import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { currencyMeasures } from "../../../consts/measures/currency_measure";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Currency = () => {
    const initialState = ["1", "59.87"];
    const methodOfCalculation = "simple";

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
    } = useSimpleConverter(currencyMeasures, initialState, methodOfCalculation);

    return (
        <div className="container-inner">
            <Title title={"Валюта"} />
            <Conversion
                measures={currencyMeasures}
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

export default Currency;
