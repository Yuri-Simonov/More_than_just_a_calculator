import React from "react";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { bodyWeightMeterMeasures } from "../../../consts/measures/body_weight_meter_measures";
import { useTwoOperatorsConverter } from "../../../hooks/useTwoOperatorsConverter";
import ConversionTwoOperators from "../../common/conversionTwoOperators";
import BWMResult from "../../common/modal_windows/BWMResult";

const BodyWeightMeter = () => {
    const initialState = ["60", "170"];
    const methodOfCalculation = "bodyWeightMeter";
    const {
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeValue,
        deleteLastResultSymbol,
        changeActiveField,
        activeField,
        finalResult,
        openOrCloseModal,
        toggleOpenOrCloseModal,
        clearActiveResultValues
    } = useTwoOperatorsConverter(
        bodyWeightMeterMeasures,
        initialState,
        methodOfCalculation
    );

    return (
        <div className="container-inner">
            <Title title={"Индекс массы тела"} />
            <ConversionTwoOperators
                measures={bodyWeightMeterMeasures}
                toggleSelect={changeSelectValue}
                firstSelectValue={firstSelect}
                secondSelectValue={secondSelect}
                firstResultValue={firstResult}
                secondResultValue={secondResult}
                toggleActiveField={changeActiveField}
                activeField={activeField}
                methodOfCalculation={methodOfCalculation}
            />
            <BWMResult
                finalResult={finalResult}
                openOrCloseModal={openOrCloseModal}
                toggleOpenOrCloseModal={toggleOpenOrCloseModal}
            />
            <SimplePanel
                changeValue={changeValue}
                deleteAllSymbols={clearActiveResultValues}
                deleteLastSymbol={deleteLastResultSymbol}
                goOperator={true}
                toggleOpenOrCloseModal={toggleOpenOrCloseModal}
            />
        </div>
    );
};

export default BodyWeightMeter;
