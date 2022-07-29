import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { evaluate, pi } from "mathjs";

const CalculatorContext = React.createContext();

export const useCalculator = () => {
    return useContext(CalculatorContext);
};

const CalculatorProvider = ({ children }) => {
    // Значение в поле ввода калькулятора
    const [value, setValue] = useState("0");

    // Значение результата вычислений калькулятора
    const [resultValue, setResultValue] = useState("");

    // флаг для отображения предварительного результата
    const [preliminaryResult, setPreliminaryResult] = useState(false);

    // Переключение флага для отображения предварительного результата
    const togglePreliminaryResult = () => {
        setPreliminaryResult(true);
    };

    // Добавление значений в поле калькулятора при клике на кнопки панели
    const changeValue = (btnValue) => {
        if (value === "0" && btnValue !== ".") {
            return setValue(btnValue);
        }
        setValue((prevState) => prevState + btnValue);
    };

    // Получение результата вычислений при клике на "="
    const changeResultValue = () => {
        togglePreliminaryResult();
        if (value.indexOf("π") !== -1 || value.indexOf("&pi;") !== -1) {
            const timeValue = value.replace(/[&pi; | π]/g, ` ${pi} `);
            try {
                setResultValue(evaluate(timeValue));
            } catch (error) {
                setResultValue("Ошибка!");
            }
        } else {
            try {
                setResultValue(evaluate(value));
            } catch (error) {
                setResultValue("Ошибка!");
            }
        }
    };

    // Удаление последнего символа в поле калькулятора
    const deleteLastSymbol = () => {
        if (value.length !== 0 && value !== "0") {
            const slicedValue = value.slice(0, -1);
            if (slicedValue.length === 0) {
                setValue("0");
            } else {
                setValue(slicedValue);
            }
        }
    };

    // Удаление всех символов
    const deleteAllSymbols = () => {
        setValue("0");
        setResultValue("0");
        setPreliminaryResult(false);
    };

    return (
        <CalculatorContext.Provider
            value={{
                value,
                changeValue,
                resultValue,
                changeResultValue,
                deleteLastSymbol,
                deleteAllSymbols,
                preliminaryResult
            }}
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
