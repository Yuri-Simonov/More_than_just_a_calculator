import { useState, useEffect } from "react";
import { evaluate, round } from "mathjs";

export const useTwoOperatorsConverter = (
    measures,
    initialState,
    methodOfCalculation
) => {
    // Состояние первого селекта
    const [firstSelect, setFirstSelect] = useState(measures[0][0]);
    // Состояние второго селекта
    const [secondSelect, setSecondSelect] = useState(measures[1][0]);
    // Состояние первого поля для ввода данных
    const [firstResult, setFirstResult] = useState(initialState[0]);
    // Состояние второго поля для ввода данных
    const [secondResult, setSecondResult] = useState(initialState[1]);
    // Состояние для результата расчета по двум введенным данным
    const [finalResult, setFinalResult] = useState(0);
    // Состояние для переключения активного результата
    const [activeField, setActiveField] = useState(1);
    // Состояние для проверки первый ли это ввод после захода на страницу или нет
    const [firstVisit, setFirstVisit] = useState(true);

    // Изменение значения в активном поле (которое имеет желтый цвет)
    const changeValue = (btnValue) => {
        if (activeField === 1) {
            if (firstResult === "0" && btnValue !== ".") {
                setFirstResult(btnValue);
            } else {
                if (firstVisit && btnValue !== ".") {
                    setFirstResult(btnValue);
                } else {
                    if (btnValue === ".") {
                        if (firstResult.indexOf(".") === -1) {
                            setFirstResult((prevState) => prevState + btnValue);
                        }
                    } else {
                        setFirstResult((prevState) => prevState + btnValue);
                    }
                }
                setFirstVisit(false);
            }
        } else {
            if (secondResult === "0" && btnValue !== ".") {
                setSecondResult(btnValue);
            } else {
                if (firstVisit && btnValue !== ".") {
                    setSecondResult(btnValue);
                } else {
                    if (btnValue === ".") {
                        if (secondResult.indexOf(".") === -1) {
                            setSecondResult(
                                (prevState) => prevState + btnValue
                            );
                        }
                    } else {
                        setSecondResult((prevState) => prevState + btnValue);
                    }
                }
                setFirstVisit(false);
            }
        }
    };

    // Вычисление значения для конвертации
    const calculation = (firstMeaseure, secondMeasure) => {
        // Если вычисление простая пропорция
        methodOfCalculation === "bodyWeightMeter" &&
            BWMCalculation(firstMeaseure, secondMeasure);
    };

    // Фикс задержки обновления стейта
    useEffect(() => {
        calculation(firstSelect, secondSelect);
    }, [firstSelect, secondSelect, firstResult, secondResult]);
    // Определение какое из полей активно
    const changeSelectValue = (id, value) => {
        if (id === "first") {
            measures[0].forEach((elem) => {
                if (value === elem.shortName) setFirstSelect(elem);
            });
        }
        if (id === "second") {
            measures[1].forEach((elem) => {
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
    function BWMCalculation(firstMeaseure, secondMeasure) {
        const calculationResult = evaluate(
            String(
                (firstResult * firstMeaseure.size) /
                    (secondResult * secondMeasure.size) ** 2
            )
        );
        const roundedResult = roundResult(calculationResult);
        setFinalResult(roundedResult);
    }

    // Округление значения
    function roundResult(res) {
        if (String(res).match(/\.\d{1,}[0-9]+$/g)) {
            res = round(res, 1);
        }
        return res;
    }

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
        finalResult
    };
};
