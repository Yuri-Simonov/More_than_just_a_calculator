import { useState, useEffect } from "react";

export const useFinance = () => {
    // Состояние для радиокнопок
    const [activeRadioButton, setActiveRadioButton] = useState(1);
    // Состояние инпута для ввода капитала
    const [capitalValue, setCapitalValue] = useState("");
    // Состояние инпута для ввода процента
    const [percentValue, setPercentValue] = useState("");
    // Состояние для выбора периода
    const [duration, setDuration] = useState({ years: 3, months: 0 });
    // Состояние для открытия/закрытия модалки
    const [togglerModal, setTogglerModal] = useState(false);

    // Изменение содержимого инпута с капиталом
    // const changeCapitalValue = (value) => {
    //     if (/^(?![\d+_@.-]+$)[a-zA-Z0-9+_@.-]*$/g.test(value)) {
    //         const newValue = value.slice(-1);
    //         console.log("newValue", newValue);
    //         setCapitalValue(newValue);
    //     } else {
    //         setCapitalValue(value);
    //     }
    // };

    // Изменение содержимого инпута с процентами
    const changePercentValue = (value) => {
        setPercentValue(value);
    };

    // Переключение радио-кнопок
    const toggleRadioButtons = (id) => {
        setActiveRadioButton(Number(id));
    };

    // Открытие и закрытие модалки с результатом
    const toggleModalWindow = () => {
        setTogglerModal(!togglerModal);
    };

    useEffect(() => {
        setCapitalValue("");
        setPercentValue("");
        setDuration({ years: 3, months: 0 });
        setPercentValue("");
    }, []);

    return {
        activeRadioButton,
        capitalValue,
        percentValue,
        duration,
        togglerModal,
        toggleRadioButtons,
        toggleModalWindow,
        changeCapitalValue,
        changePercentValue
    };
};
