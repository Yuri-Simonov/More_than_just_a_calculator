import React from "react";
import Conversion from "../../common/conversion";
import Title from "../../common/title";
import { scaleOfnotation } from "../../../consts/measures/scaleOfnotation_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";
import ScaleOfNotationPanel from "../../common/scaleOfNotation_panel";

const ScaleOfnotation = () => {
    const initialState = ["1", "1"];
    const methodOfCalculation = "scaleOfnotation";
    const {
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeActiveField,
        activeField,
        changeValue,
        clearResultValues,
        deleteLastResultSymbol
    } = useSimpleConverter(scaleOfnotation, initialState, methodOfCalculation);

    return (
        <div className="container-inner">
            <Title title={"Система счисления"} />
            <Conversion
                measures={scaleOfnotation}
                toggleSelect={changeSelectValue}
                firstSelectValue={firstSelect}
                secondSelectValue={secondSelect}
                firstResultValue={firstResult}
                secondResultValue={secondResult}
                toggleActiveField={changeActiveField}
                activeField={activeField}
            />
            <ScaleOfNotationPanel
                changeValue={changeValue}
                deleteAllSymbols={clearResultValues}
                deleteLastSymbol={deleteLastResultSymbol}
            />
        </div>
    );
};

export default ScaleOfnotation;
