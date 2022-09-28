import { useState, useEffect } from "react";

export const useFinance = () => {
    // Состояние для радиокнопок
    const [activeRadioButton, setActiveRadioButton] = useState(1);
    // Состояние инпута для ввода капитала
    const [capitalValue, setCapitalValue] = useState("");
    // Состояние для суммарного капитала
    const [capitalValueTotal, setCapitalValueTotal] = useState(0);
    // Состояние инпута для ввода процента
    const [percentValue, setPercentValue] = useState("");
    // Состояние с результатом вычислений
    const [totalValue, setTotalValue] = useState(0);
    // Состояние для выбора периода
    const [duration] = useState({ years: 3, months: 0 }); // setDuration
    // Состояние для открытия/закрытия модалки
    const [togglerModal, setTogglerModal] = useState(false);
    // Состояние проверки на валидность введенных в инпуты данных
    const [availabilityErrors, setAvailabilityErrors] = useState(true);

    // Обновление состояний при изменении значений в инпутах
    useEffect(() => {
        checkInputsErrors();
    }, [capitalValue, percentValue]);

    // Изменение содержимого инпута с капиталом
    const changeCapitalValue = (value, id) => {
        checkInputsErrors(value, id);
        setCapitalValue(value);
    };

    // Изменение содержимого инпута с процентами
    const changePercentValue = (value, id) => {
        checkInputsErrors(value, id);
        setPercentValue(value);
    };

    // Переключение радио-кнопок
    const toggleRadioButtons = (id) => {
        setActiveRadioButton(Number(id));
    };

    // Проверка содержимого на валидность
    const checkValueValid = (value) => {
        return /^(?![\d+_@.-]+$)[a-zA-Z0-9+_@/.-/!]*$/g.test(value);
    };

    // Проверка инпутов на валидность
    const checkInputsErrors = () => {
        const checkCapitalValue = checkValueValid(capitalValue);
        const checkPercentValue = checkValueValid(percentValue);

        if (
            (checkCapitalValue && capitalValue.length === 0) ||
            (checkPercentValue && percentValue.length === 0)
        ) {
            setAvailabilityErrors(true);
        } else {
            setAvailabilityErrors(false);
        }
    };

    // Открытие и закрытие модалки с результатом
    const toggleModalWindow = () => {
        !togglerModal && setResults();
        setTogglerModal(!togglerModal);
    };

    // Вычисление значения инвестиций
    const calcInvestments = (repeatCapitalValue = 0) => {
        const totalMonths = duration.years * 12 + duration.months;
        let totalSum = Number(capitalValue);
        let totalCapital = Number(capitalValue);
        for (let i = 0; i < totalMonths; i++) {
            totalSum +=
                Number((percentValue / 12 / 100) * totalCapital) +
                Number(repeatCapitalValue);
            if (i > 0) {
                totalCapital += Number(repeatCapitalValue);
            }
        }
        const fixedSum = totalSum.toFixed(2);
        setTotalValue(fixedSum);
        setCapitalValueTotal(totalCapital);
    };

    // Запись вычесленных инвестиций в хуки состояний
    const setResults = () => {
        if (activeRadioButton === 1) {
            calcInvestments();
        } else {
            calcInvestments(capitalValue);
        }
    };

    return {
        activeRadioButton,
        capitalValue,
        percentValue,
        duration,
        togglerModal,
        toggleRadioButtons,
        toggleModalWindow,
        changeCapitalValue,
        changePercentValue,
        availabilityErrors,
        totalValue,
        capitalValueTotal
    };
};
