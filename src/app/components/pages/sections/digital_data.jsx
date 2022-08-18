import React, { useState, useEffect } from "react";
import Conversion from "../../common/conversion";
import SimplePanel from "../../common/simple_panel";
import Title from "../../common/title";
import { evaluate } from "mathjs";
import { digitalDataMeasures } from "../../../consts/digital_data_measures";

const DigitalData = () => {
    // Состояние первого селекта
    const [firstSelect, setFirstSelect] = useState(digitalDataMeasures[0]);
    // Состояние второго селекта
    const [secondSelect, setSecondSelect] = useState(digitalDataMeasures[1]);
    // Состояние первого результата
    const [firstResult, setFirstResult] = useState("1");
    // Состояние второго результата
    const [secondResult, setSecondResult] = useState("1024");
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
            const calculationResult = evaluate(
                String((firstResult * firstMeaseure.size) / secondMeasure.size)
            );
            setSecondResult(String(calculationResult));
        } else {
            const calculationResult = evaluate(
                String((secondResult / firstMeaseure.size) * secondMeasure.size)
            );
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

    return (
        <div className="container-inner">
            <Title title={"Данные"} />
            <Conversion
                measures={digitalDataMeasures}
                toggleSelect={changeSelectValue}
                firstSelectValue={firstSelect}
                secondSelectValue={secondSelect}
                firstResultValue={firstResult}
                secondResultValue={secondResult}
                toggleActiveField={changeActiveField}
                activeField={activeField}
            />
            <SimplePanel
                changeValue={changeValue}
                deleteAllSymbols={clearResultValues}
                deleteLastSymbol={deleteLastResultSymbol}
            />
        </div>
    );
};

export default DigitalData;
