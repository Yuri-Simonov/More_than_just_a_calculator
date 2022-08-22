import { useState, useEffect } from "react";
import { evaluate, round } from "mathjs";
import { firstSelectFunc } from "../utils/switchersTemperatureCalc";

export const useSimpleConverter = (
    measures,
    initialState,
    methodOfCalculation
) => {
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
    // Состояние для оператора +/-

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
        // Если вычисление простая пропорция
        methodOfCalculation === "simple" &&
            simpleCalculation(firstMeaseure, secondMeasure);
        // Если вычисление температуры по формулам
        methodOfCalculation === "temperature" &&
            temperatureCalculation(firstMeaseure, secondMeasure);
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

    // Вычисление по простой пропорции
    function simpleCalculation(firstMeaseure, secondMeasure) {
        if (activeField === 1) {
            const calculationResult = evaluate(
                String((firstResult * firstMeaseure.size) / secondMeasure.size)
            );
            const roundedResult = roundResult(calculationResult);
            setSecondResult(String(roundedResult));
        } else {
            const calculationResult = evaluate(
                String((secondResult / firstMeaseure.size) * secondMeasure.size)
            );
            const roundedResult = roundResult(calculationResult);
            setFirstResult(String(roundedResult));
        }
    }

    // Вычисление температуры по формулам
    function temperatureCalculation(firstMeasure, secondMeasure) {
        if (activeField === 1) {
            const calculationResult = firstSelectFunc(
                firstMeasure,
                secondMeasure,
                firstResult
            );

            const roundedResult = roundResult(calculationResult);
            setSecondResult(String(roundedResult));
        } else {
            const calculationResult = firstSelectFunc(
                secondMeasure,
                firstMeasure,
                secondResult
            );
            const roundedResult = roundResult(calculationResult);
            setFirstResult(String(roundedResult));
        }
    }

    // Округление значения
    function roundResult(res) {
        if (String(res).match(/\.\d{6,}[0-9]+$/g)) {
            res = round(res, 6);
        }
        return res;
    }

    // Переключение оператора +/- на панели
    const togglePlusOrMinus = () => {
        if (activeField === 1) {
            if (firstResult[0] === "-") {
                const newResult = firstResult.slice(1);
                setFirstResult(newResult);
            } else {
                setFirstResult((prevState) => "-" + prevState);
            }
        } else {
            if (secondResult[0] === "-") {
                const newResult = secondResult.slice(1);
                setSecondResult(newResult);
            } else {
                setSecondResult((prevState) => "-" + prevState);
            }
        }
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
        activeField,
        togglePlusOrMinus
    };
};
