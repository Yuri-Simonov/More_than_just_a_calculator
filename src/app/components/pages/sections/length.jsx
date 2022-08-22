import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { lengthMeasures } from "../../../consts/measures/length_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Length = () => {
    const initialState = ["1", "0.1"];
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
    } = useSimpleConverter(lengthMeasures, initialState);

    return (
        <div className="container-inner">
            <Title title={"Длина"} />
            <Conversion
                measures={lengthMeasures}
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

export default Length;
