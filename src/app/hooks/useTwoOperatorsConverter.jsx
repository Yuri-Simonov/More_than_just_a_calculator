import { useState, useEffect } from "react";
import { evaluate, round } from "mathjs";
import { errorPrompt } from "../utils/error_prompt";
import { errorMessages } from "../consts/error_messages";

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
    const [firstVisit, setFirstVisit] = useState({
        firstValue: true,
        secondValue: true
    });
    // Состояние для открытия/закрытия модалки результата
    const [openOrCloseModal, setOpenOrCloseModal] = useState(false);

    // Изменение значения в активном поле (которое имеет желтый цвет)
    const changeValue = (btnValue) => {
        if (activeField === 1) {
            if (firstResult === "0" && btnValue !== ".") {
                setFirstResult(btnValue);
            } else {
                if (firstVisit.firstValue && btnValue !== ".") {
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
                setFirstVisit({ ...firstVisit, firstValue: false });
            }
        } else {
            if (secondResult === "0" && btnValue !== ".") {
                setSecondResult(btnValue);
            } else {
                if (firstVisit.secondValue && btnValue !== ".") {
                    setSecondResult(btnValue);
                } else {
                    if (btnValue === ".") {
                        if (secondResult.indexOf(".") === -1) {
                            setSecondResult(
                                (prevState) => prevState + btnValue
                            );
                        }
                    } else if (
                        methodOfCalculation === "discount" &&
                        secondResult.length === 2 &&
                        btnValue !== "." &&
                        secondResult.indexOf(".") === -1
                    ) {
                        sliceDiscount();
                        errorPrompt(errorMessages.discount);
                    } else {
                        setSecondResult((prevState) => prevState + btnValue);
                    }
                }
                setFirstVisit({ ...firstVisit, secondValue: false });
            }
        }
    };

    // Вычисление значения для конвертации
    const calculation = (firstMeaseure, secondMeasure) => {
        // Если вычисление простая пропорция
        methodOfCalculation === "bodyWeightMeter" &&
            BWMCalculation(firstMeaseure, secondMeasure);
        methodOfCalculation === "discount" &&
            discountCalculation(firstMeaseure, secondMeasure);
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

    // Очистка только активного поля
    const clearActiveResultValues = () => {
        if (activeField === 1) {
            setFirstResult("0");
        } else {
            setSecondResult("0");
        }
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

    // Вычисление индекса массы тела
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

    // Вычисление скидки
    function discountCalculation() {
        const calculationResult = evaluate(
            String(firstResult * (1 - secondResult / 100))
        );
        const roundedResult = roundResult(calculationResult);
        setFinalResult(roundedResult);
    }

    // Округление скидки при попытке ввода больше 100
    function sliceDiscount() {
        if (secondResult > 100) {
            const newValueSecondResult = secondResult.slice(0, 2);
            setSecondResult(newValueSecondResult);
        }
    }

    // Округление значения
    function roundResult(res) {
        if (String(res).match(/\.\d{1,}[0-9]+$/g)) {
            res = round(res, 2);
        }
        return res;
    }

    // Закрытие модального окна при клике вне его области
    const toggleOpenOrCloseModal = () => {
        if (
            (finalResult < 16 || finalResult > 40) &&
            openOrCloseModal === false
        ) {
            errorPrompt(errorMessages.BWM);
        } else {
            setOpenOrCloseModal((prevState) => !prevState);
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
        finalResult,
        openOrCloseModal,
        toggleOpenOrCloseModal,
        clearActiveResultValues
    };
};
