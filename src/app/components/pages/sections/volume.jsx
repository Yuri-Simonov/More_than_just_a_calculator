import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { volumeMeasures } from "../../../consts/measures/volume_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Volume = () => {
    const initialState = ["1", "10000"];
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
    } = useSimpleConverter(volumeMeasures, initialState, methodOfCalculation);

    return (
        <div className="container-inner">
            <Title title={"Объем"} />
            <Conversion
                measures={volumeMeasures}
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

export default Volume;
