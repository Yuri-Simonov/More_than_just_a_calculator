import React from "react";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { bodyWeightMeterMeasures } from "../../../consts/measures/body_weight_meter_measures";
import { useTwoOperatorsConverter } from "../../../hooks/useTwoOperatorsConverter";
import ConversionTwoOperators from "../../common/conversionTwoOperators";

const Discount = () => {
    const initialState = ["100", "10"];
    const methodOfCalculation = "discount";
    const {
        firstResult,
        secondResult,
        changeValue,
        deleteLastResultSymbol,
        changeActiveField,
        activeField,
        finalResult,
        clearActiveResultValues
    } = useTwoOperatorsConverter(
        bodyWeightMeterMeasures,
        initialState,
        methodOfCalculation
    );

    return (
        <div className="container-inner">
            <Title title={"Скидка"} />
            <ConversionTwoOperators
                firstResultValue={firstResult}
                secondResultValue={secondResult}
                toggleActiveField={changeActiveField}
                activeField={activeField}
                methodOfCalculation={methodOfCalculation}
                finalResult={finalResult}
            />
            <SimplePanel
                changeValue={changeValue}
                deleteAllSymbols={clearActiveResultValues}
                deleteLastSymbol={deleteLastResultSymbol}
            />
        </div>
    );
};

export default Discount;
