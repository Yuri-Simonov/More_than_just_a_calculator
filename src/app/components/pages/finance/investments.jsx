import React from "react";
import { useFinance } from "../../../hooks/useFinance";
import CalculateButton from "../../common/calculate_button";
import Duration from "../../common/duration";
import Result from "../../common/modal_windows/result";
import NumberInput from "../../common/number_input";
import RadioButtons from "../../common/radio_buttons";
import Title from "../../common/title";

const Investments = () => {
    const {
        activeRadioButton,
        capitalValue,
        percentValue,
        duration,
        togglerModal,
        toggleRadioButtons,
        toggleModalWindow,
        changeCapitalValue,
        changePercentValue
    } = useFinance();

    return (
        <div className="container-inner">
            <Title title={"Инвестиции"} />
            <RadioButtons
                activeRadioButton={activeRadioButton}
                toggleRadioButtons={toggleRadioButtons}
            />
            <NumberInput
                title="Всего инвестиций"
                placeholder="Введите сумму"
                value={capitalValue}
                changeValue={changeCapitalValue}
            />
            <NumberInput
                title="Процент"
                placeholder="Введите годовой процент"
                value={percentValue}
                changeValue={changePercentValue}
            />
            <Duration duration={duration} />
            <CalculateButton toggleModalWindow={toggleModalWindow} />
            {togglerModal && (
                <Result
                    title="Общий объем"
                    toggleModalWindow={toggleModalWindow}
                />
            )}
        </div>
    );
};

export default Investments;
