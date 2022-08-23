import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { weightMeasures } from "../../../consts/measures/weight_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Weight = () => {
    const initialState = ["1", "3.6"];
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
    } = useSimpleConverter(weightMeasures, initialState, methodOfCalculation);

    return (
        <div className="container-inner">
            <Title title={"Масса"} />
            <Conversion
                measures={weightMeasures}
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

export default Weight;
