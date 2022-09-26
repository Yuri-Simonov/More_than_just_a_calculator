import React from "react";
import CalculateButton from "../../common/calculate_button";
import Duration from "../../common/duration";
import Result from "../../common/modal_windows/result";
import NumberInput from "../../common/number_input";
import RadioButtons from "../../common/radio_buttons";
import Title from "../../common/title";

const Investments = () => {
    return (
        <div className="container-inner">
            <Title title={"Инвестиции"} />
            <RadioButtons />
            <NumberInput title="Всего инвестиций" placeholder="Введите сумму" />
            <NumberInput title="Процент" placeholder="Введите годовую сумму" />
            <Duration />
            <CalculateButton />
            {false && <Result title="Общий объем" />}
        </div>
    );
};

export default Investments;
