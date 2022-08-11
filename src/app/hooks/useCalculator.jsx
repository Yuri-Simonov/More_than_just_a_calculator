import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { evaluate, round } from "mathjs";
import { converting } from "../utils/converting";
import { closeBracket } from "../utils/closeBracket";

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
    // флаг для переключения режима очистки "С"/"АС"
    const [CorAC, setCorAc] = useState(true);

    // Переключатель операторов на первой строке в развернутом режиме калькулятора
    const toggleFirstLineOperators = () => {
        setFirstLineOperators((prevState) => !prevState);
    };
    // Переключатель режима отображения калькулятора
    const toggleExtendedCalc = (e) => {
        e.target.className = "animation-arrows";
        setExtendedCalc((prevState) => !prevState);
    };
    // Переключатель операторов на первой строке в развернутом режиме калькулятора
    const toggleCorAC = () => {
        if (historyOfCalculation.length !== 0 || value !== "0") {
            setCorAc(true);
        } else {
            setCorAc(false);
        }
    };

    // Добавление значений в поле калькулятора при клике на кнопки панели
    const changeValue = (btnValue) => {
        if (btnValue !== "") {
            setTouchEqual(false);
        }
        const valueOfButtons = [".", "^", "!", "+", "-", "/", "*", "%"];
        const booleanResultValueOfButtons = valueOfButtons.some((btn) => {
            return btn === btnValue;
        });
        if (
            value === "0" &&
            !booleanResultValueOfButtons &&
            Boolean(btnValue)
        ) {
            return setValue(btnValue);
        }
        if (touchEqual) {
            checkTouchEqual(btnValue);
        }
        if (btnValue !== "") {
            setBigOrLittleValue(false);
        }
        if (booleanResultValueOfButtons) {
            const checkPastLastSymbol = value.slice(-1);
            const booleanPastLastSymbol = valueOfButtons.some((btn) => {
                return btn === checkPastLastSymbol;
            });
            if (booleanPastLastSymbol && checkPastLastSymbol !== "!") {
                setValue(value.slice(0, -1));
            }
        }
        setValue((prevState) => prevState + btnValue);
    };

    // Фикс задержки корректного отображения изменения "А"/"АС"
    useEffect(() => {
        toggleCorAC();
    }, [value, historyOfCalculation]);

    // Получение результата вычислений при клике на "="
    const changeResultValue = () => {
        try {
            const checkBrackets = closeBracket(value);
            setValue(checkBrackets); // замена содержимого в калькуляторе. Актуально, когда добавляются недостающие закрывающие скобки
            const valueBeforeConverting = converting(checkBrackets);

            if (
                valueBeforeConverting.endsWith("i") ||
                valueBeforeConverting.indexOf("()") !== -1
            ) {
                setResultValue("Ошибка!");
            } else {
                const roundingValue = round(evaluate(valueBeforeConverting), 5);
                // Округление результата, если нет конечной точки деления
                setResultValue(roundingValue);
            }

            setPreliminaryResult(true);
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
            slicedValue.length === 0 ? setValue("0") : setValue(slicedValue);
        }
    };

    // Удаление всех символов из поля ввода и результата
    const deleteAllSymbols = () => {
        setValue("0");
        setResultValue("0");
        setPreliminaryResult(false);
        setBigOrLittleValue(false);
        toggleCorAC();
    };

    // Удаление всех символов из истории вычислений
    const deleteAllHistory = () => {
        setHistoryOfCalculation([]);
        localStorage.setItem("calculation history", JSON.stringify([]));
        toggleCorAC();
    };

    // Функция для проверка наличия истории вычислений в localStorage
    const checkLocalStorage = () => {
        // промежуточная перменная timeValue, чтобы обойти задержку обновления стейта
        const timeValue = [...historyOfCalculation, { value, resultValue }];
        setHistoryOfCalculation(timeValue);
        localStorage.setItem("calculation history", JSON.stringify(timeValue));
    };

    // Проверка localStorage при загрузке
    useEffect(() => {
        if (localStorage.getItem("calculation history")) {
            setHistoryOfCalculation(
                JSON.parse(localStorage.getItem("calculation history"))
            );
        } else {
            localStorage.setItem(
                "calculation history",
                JSON.stringify(historyOfCalculation)
            );
        }
    }, [CorAC]);

    // функция, проверяющая, что было нажато "=". Если да, то при наборе новых значений отправляет старое в историю и очищает поле ввода под новые данные
    const checkTouchEqual = (btnValue) => {
        if (btnValue) {
            checkLocalStorage();
            setTouchEqual(false);
            setPreliminaryResult(false);
            let checkBtnValue = false;
            for (let i = 0; i < 10; i++) {
                if (i === Number(btnValue)) {
                    checkBtnValue = true;
                    break;
                }
            }
            checkBtnValue ? setValue("") : setValue(resultValue);
        }
    };

    // Функция, добавляющаяя скобки в конец, когда это необходимо
    const addCloseBracket = (strWithBracket) => {
        setValue(strWithBracket);
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
                deleteAllHistory,
                preliminaryResult,
                bigOrLittleValue,
                firstLineOperators,
                toggleFirstLineOperators,
                extendedCalc,
                toggleExtendedCalc,
                historyOfCalculation,
                CorAC,
                addCloseBracket
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
