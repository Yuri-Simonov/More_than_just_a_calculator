import React from "react";
import { useFinance } from "../../../hooks/useFinance";
import CalculateButton from "../../common/calculate_button";
import Duration from "../../common/duration";
import ChoiceOfDuration from "../../common/modal_windows/choice_of_duration";
import Result from "../../common/modal_windows/result";
import NumberInput from "../../common/number_input";
import Title from "../../common/title";

const Credit = () => {
    const {
        capitalValue,
        percentValue,
        duration,
        togglerModal,
        toggleModalWindowCredit,
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
            <Title title={"Кредит"} />
            <NumberInput
                title="Капитал"
                placeholder="Введите сумму"
                value={capitalValue}
                changeValue={changeCapitalValue}
            />
            <NumberInput
                title="Процент"
                placeholder="Введите годовую ставку"
                value={percentValue}
                changeValue={changePercentValue}
            />
            <Duration
                text="Срок кредита"
                duration={duration}
                toggleDurationModal={toggleDurationModal}
            />
            <CalculateButton
                toggleModalWindow={toggleModalWindowCredit}
                visibility={availabilityErrors}
            />
            {togglerModal && (
                <Result
                    title="Ежемесячный платеж"
                    toggleModalWindow={toggleModalWindowCredit}
                    totalValue={totalValue}
                    duration={duration}
                    capitalTotal={capitalValueTotal}
                    rangeTotal={true}
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

export default Credit;
