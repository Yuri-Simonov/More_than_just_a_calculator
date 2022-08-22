import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { evaluate, round } from "mathjs";

export const useSimpleConverter = (measures, initialState) => {
    // Состояние первого селекта
    const [firstSelect, setFirstSelect] = useState(measures[0]);
    // Состояние второго селекта
    const [secondSelect, setSecondSelect] = useState(measures[1]);
    // Состояние первого результата
    const [firstResult, setFirstResult] = useState(initialState[0]);
    // Состояние второго результата
    const [secondResult, setSecondResult] = useState(initialState[1]);
    // Состояние для переключения активного результата
    const [activeField, setActiveField] = useState(1);
    // Изменение значения в активном поле (которое имеет желтый цвет)
    const changeValue = (btnValue) => {
        if (activeField === 1) {
            if (firstResult === "0" && btnValue !== ".") {
                setFirstResult(btnValue);
            } else {
                setFirstResult((prevState) => prevState + btnValue);
            }
        } else {
            if (secondResult === "0" && btnValue !== ".") {
                setSecondResult(btnValue);
            } else {
                setSecondResult((prevState) => prevState + btnValue);
            }
        }
    };
    // Вычисление значения для конвертации
    const calculation = (firstMeaseure, secondMeasure) => {
        if (activeField === 1) {
            let calculationResult = evaluate(
                String((firstResult * firstMeaseure.size) / secondMeasure.size)
            );
            if (String(calculationResult).match(/\.[9]+/g)) {
                calculationResult = round(calculationResult, 6);
            }
            setSecondResult(String(calculationResult));
        } else {
            let calculationResult = evaluate(
                String((secondResult / firstMeaseure.size) * secondMeasure.size)
            );
            if (String(calculationResult).match(/\.[9]+/g)) {
                calculationResult = round(calculationResult, 6);
            }
            setFirstResult(String(calculationResult));
        }
    };
    // Фикс задержки обновления стейта
    useEffect(() => {
        calculation(firstSelect, secondSelect);
    }, [firstSelect, secondSelect, firstResult, secondResult]);
    // Определение какое из полей активно
    const changeSelectValue = (id, value) => {
        if (id === "first") {
            measures.forEach((elem) => {
                if (value === elem.shortName) setFirstSelect(elem);
            });
        }
        if (id === "second") {
            measures.forEach((elem) => {
                if (value === elem.shortName) setSecondSelect(elem);
            });
        }
        calculation(firstSelect, secondSelect);
    };

    // Очистка полей от значений
    const clearResultValues = () => {
        setFirstResult("0");
        setSecondResult("0");
    };

    // Удаление последнего символа в активном поле
    const deleteLastResultSymbol = () => {
        if (activeField === 1) {
            if (firstResult.length !== 0 && firstResult !== "0") {
                const slicedValue = String(firstResult).slice(0, -1);
                slicedValue.length === 0
                    ? setFirstResult("0")
                    : setFirstResult(slicedValue);
            }
        } else {
            if (secondResult.length !== 0 && secondResult !== "0") {
                const slicedValue = String(secondResult).slice(0, -1);
                slicedValue.length === 0
                    ? setSecondResult("0")
                    : setSecondResult(slicedValue);
            }
        }
    };

    // Переключение активного поля
    const changeActiveField = (elem) => {
        elem.target.className.indexOf("cr-1") !== -1
            ? setActiveField(1)
            : setActiveField(2);
    };
    return {
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeValue,
        clearResultValues,
        deleteLastResultSymbol,
        changeActiveField,
        activeField
    };
};

useSimpleConverter.defaultProps = {
    simpleCalculation: false,
    temperatureCalculation: false,
    multiDecimalSystemCalculation: false
};

useSimpleConverter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
