import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { evaluate, round } from "mathjs";
import { converting } from "../utils/converting";

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
    // флаг для переключения большого шрифта между предварительным резульатом и итоговым
    const [bigOrLittleValue, setBigOrLittleValue] = useState(false);
    // флаг для переключения операторов первой строки в развернутом режиме калькулятора, кнопка "2nd".
    const [firstLineOperators, setFirstLineOperators] = useState(true);
    // флаг для переключения режима отображения калькулятора (расширенный функционал и минимальный)
    const [extendedCalc, setExtendedCalc] = useState(true);
    // флаг для определения было ли нажато "="
    const [touchEqual, setTouchEqual] = useState(false);
    // История вычислений в localStorage
    const [historyOfCalculation, setHistoryOfCalculation] = useState([]);

    // Переключатель операторов на первой строке в развернутом режиме калькулятора
    const toggleFirstLineOperators = () => {
        setFirstLineOperators((prevState) => !prevState);
    };
    // Переключатель режима отображения калькулятора
    const toggleExtendedCalc = (e) => {
        e.target.className = "animation-arrows";
        setExtendedCalc((prevState) => !prevState);
    };

    // Добавление значений в поле калькулятора при клике на кнопки панели
    const changeValue = (btnValue) => {
        // console.log("btn", btnValue);
        if (
            value === "0" &&
            btnValue !== "." &&
            btnValue !== "^" &&
            btnValue !== "!" &&
            Boolean(btnValue)
        ) {
            return setValue(btnValue);
        }
        if (touchEqual) {
            checkTouchEqual();
        }
        setBigOrLittleValue(false);
        setValue((prevState) => prevState + btnValue);
    };

    // Получение результата вычислений при клике на "="
    const changeResultValue = () => {
        const valueBeforeConverting = converting(value);
        // console.log("valueBeforeConverting", valueBeforeConverting);
        try {
            setPreliminaryResult(true);
            // Округление результата, если нет конечной точки деления
            const roundingValue = round(evaluate(valueBeforeConverting), 5);
            setResultValue(roundingValue);
            setBigOrLittleValue(true);
            setTouchEqual(true);
        } catch (error) {
            setResultValue("Ошибка!");
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
        setBigOrLittleValue(false);
    };

    // функция, проверяющая, что было нажато "=". Если да, то при наборе новых значений отправляет старое в историю и очищает поле ввода под новые данные
    const checkTouchEqual = () => {
        if (!localStorage.getItem("calculation history")) {
            localStorage.setItem("calculation history", historyOfCalculation);
        } else {
            setHistoryOfCalculation(
                JSON.parse(localStorage.getItem("calculation history"))
            );
        }
        setHistoryOfCalculation([
            ...historyOfCalculation,
            { value, resultValue }
        ]);
        localStorage.setItem(
            "calculation history",
            JSON.stringify(historyOfCalculation)
        );
        setTouchEqual(false);
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
                preliminaryResult,
                bigOrLittleValue,
                firstLineOperators,
                toggleFirstLineOperators,
                extendedCalc,
                toggleExtendedCalc,
                historyOfCalculation
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
