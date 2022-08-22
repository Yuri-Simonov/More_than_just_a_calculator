import React from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { squareMeasures } from "../../../consts/measures/square_measures";
import { useSimpleConverter } from "../../../hooks/useSimpleConverter";

const Square = () => {
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
    } = useSimpleConverter(squareMeasures, initialState, methodOfCalculation);

    return (
        <div className="container-inner">
            <Title title={"Площадь"} />
            <Conversion
                measures={squareMeasures}
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

export default Square;
