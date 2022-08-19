import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const SimpleConverter = () => {
    const digitalDataMeasures = [
        { shortName: "Б", fullName: "Байт", size: 1024 ** 1 },
        { shortName: "КБ", fullName: "Килобайт", size: 1024 ** 2 },
        { shortName: "МБ", fullName: "Мегабайт", size: 1024 ** 3 },
        { shortName: "ГБ", fullName: "Гигабайт", size: 1024 ** 4 },
        { shortName: "ТБ", fullName: "Терабайт", size: 1024 ** 5 },
        { shortName: "ПБ", fullName: "Петабайт", size: 1024 ** 6 }
    ];

    // Состояние первого селекта
    const [firstSelect, setFirstSelect] = useState(digitalDataMeasures[0]);
    // Состояние второго селекта
    const [secondSelect, setSecondSelect] = useState(digitalDataMeasures[1]);
    // Состояние первого результата
    const [firstResult, setFirstResult] = useState(1);
    // Состояние второго результата
    const [secondResult, setSecondResult] = useState(1024);
    // Изменение значения в активном поле (которое имеет желтый цвет)
    const changeValue = (btnValue) => {
        if (btnValue === ".") {
            setFirstResult((prevState) => Number(prevState + btnValue) + ".");
        } else {
            setFirstResult((prevState) => Number(prevState + btnValue));
        }
    };
    // Вычисление значения для конвертации
    const calculation = (firstMeaseure, secondMeasure) => {
        const calculationResult =
            (firstResult * firstMeaseure.size) / secondMeasure.size;
        setSecondResult(calculationResult);
    };
    // Фикс задержки обновления стейта
    useEffect(() => {
        calculation(firstSelect, secondSelect);
    }, [firstSelect, secondSelect, firstResult, secondResult]);
    // Определение какое из полей активно
    const changeSelectValue = (id, value) => {
        if (id === "first") {
            digitalDataMeasures.forEach((elem) => {
                if (value === elem.shortName) setFirstSelect(elem);
            });
        }
        if (id === "second") {
            digitalDataMeasures.forEach((elem) => {
                if (value === elem.shortName) setSecondSelect(elem);
            });
        }
        calculation(firstSelect, secondSelect);
    };

    // Очистка полей от значений
    const clearResultValues = () => {
        setFirstResult(0);
        setSecondResult(0);
    };

    // Удаление последнего символа в активном поле
    const deleteLastResultSymbol = () => {
        if (firstResult.length !== 0 && firstResult !== "0") {
            const slicedValue = String(firstResult).slice(0, -1);
            slicedValue.length === 0
                ? setFirstResult(0)
                : setFirstResult(Number(slicedValue));
        }
    };

    return (
        digitalDataMeasures,
        changeSelectValue,
        firstSelect,
        secondSelect,
        firstResult,
        secondResult,
        changeValue,
        clearResultValues,
        deleteLastResultSymbol
    );
};
SimpleConverter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
