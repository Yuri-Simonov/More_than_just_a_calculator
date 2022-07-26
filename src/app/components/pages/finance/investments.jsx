import React from "react";
import { useFinance } from "../../../hooks/useFinance";
import CalculateButton from "../../common/calculate_button";
import Duration from "../../common/duration";
import ChoiceOfDuration from "../../common/modal_windows/choice_of_duration";
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
        changePercentValue,
        availabilityErrors,
        totalValue,
        capitalValueTotal,
        durationModal,
        toggleDurationModal,
        activeSlide,
        changeActiveSlide
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
            <Duration
                text="Длительность"
                duration={duration}
                toggleDurationModal={toggleDurationModal}
            />
            <CalculateButton
                toggleModalWindow={toggleModalWindow}
                visibility={availabilityErrors}
            />
            {togglerModal && (
                <Result
                    title="Общий объем"
                    toggleModalWindow={toggleModalWindow}
                    totalValue={totalValue}
                    duration={duration}
                    capitalTotal={capitalValueTotal}
                />
            )}
            {durationModal && (
                <ChoiceOfDuration
                    toggleDurationModal={toggleDurationModal}
                    activeSlide={activeSlide}
                    changeActiveSlide={changeActiveSlide}
                />
            )}
        </div>
    );
};

export default Investments;
