import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { evaluate } from "mathjs";

const CalculatorContext = React.createContext();

export const useCalculator = () => {
    return useContext(CalculatorContext);
};

const CalculatorProvider = ({ children }) => {
    // Значение в поле ввода калькулятора
    const [value, setValue] = useState(0);
    // Значение результата вычислений калькулятора
    const [finalValue, setFinalValue] = useState("");

    // Добавление значений в поле калькулятора при клике на кнопки панели
    const changeValue = (e) => {
        if (value === 0 && isNaN(Number(e.textContent))) {
            return setValue(e.target.textContent);
        }
        setValue((prevState) => prevState + e.target.textContent);
    };

    // Получение результата вычислений при клике на "="
    const finalResult = () => {
        setFinalValue(evaluate(value));
    };

    return (
        <CalculatorContext.Provider
            value={{ value, changeValue, finalValue, finalResult }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};
CalculatorProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CalculatorProvider;
