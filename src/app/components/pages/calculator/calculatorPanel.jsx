import deleteSymbol from "../../../images/svg/delete_symbol.svg";
import equalSymbol from "../../../images/svg/equal.svg";
import arrowsToggle from "../../../images/svg/arrows_toggle.svg";
import React from "react";
import { useCalculator } from "../../../hooks/useCalculator";

const CalculatorPanel = () => {
    const {
        changeValue,
        changeResultValue,
        deleteLastSymbol,
        deleteAllSymbols
    } = useCalculator();

    // Панель калькулятора
    const calculatorPanel = [
        [
            <span
                key={"2nd"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                2nd
            </span>, // переключатель между sin/arcsin и тд.
            <span key={"deg"}>deg</span>, // градусы
            <span
                key={"sin"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                sin
            </span>, // синус/аркосинус
            <span
                key={"cos"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                cos
            </span>, // косинус/аркосинус
            <span
                key={"tan"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                tan
            </span> // тангенс/арктангенс
        ],
        [
            <span key={"x**y"}>
                x<sup>y</sup>
            </span>, // "x" в степени "y"
            <span
                key={"lg"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                lg
            </span>, // десятичный логарифм
            <span
                key={"ln"}
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                ln
            </span>, // натуральный логарифм
            <span key={"("} onClick={(e) => changeValue(e.target.textContent)}>
                (
            </span>, // открывающая скобка
            <span key={")"} onClick={(e) => changeValue(e.target.textContent)}>
                )
            </span> // закрывающая скобка
        ],
        [
            <span key={"&#8730;"}>&#8730;</span>, // знак корня
            <span key={"C"} className="orange" onClick={deleteAllSymbols}>
                C
            </span>, // удаление математической операции (С) и полное удаление всех математических операций вместе с историей
            <span key={"del"} className="orange" onClick={deleteLastSymbol}>
                <img src={deleteSymbol} alt="" />
            </span>, // удаление одного символа из текущей записи в калькуляторе
            <span
                key={"%"}
                className="orange"
                onClick={(e) => changeValue(e.target.textContent)}
            >
                %
            </span>, // проценты
            <span
                key={"/"}
                className="orange"
                onClick={(e) => changeValue(e.target.textContent)}
            >
                /
            </span> // знак деления
        ],
        [
            <span key={"x!"} onClick={() => changeValue("!")}>
                x!
            </span>, // факториал от "х"
            <span key={"7"} onClick={(e) => changeValue(e.target.textContent)}>
                7
            </span>, // 7
            <span key={"8"} onClick={(e) => changeValue(e.target.textContent)}>
                8
            </span>, // 8
            <span key={"9"} onClick={(e) => changeValue(e.target.textContent)}>
                9
            </span>, // 9
            <span
                key={"&#215;"}
                className="orange"
                onClick={() => changeValue("*")}
            >
                &#215;
            </span> // знак умножения
        ],
        [
            <span key={"1/x"}>1/x</span>, // обратное к числу/выражению
            <span key={"4"} onClick={(e) => changeValue(e.target.textContent)}>
                4
            </span>, // 4
            <span key={"5"} onClick={(e) => changeValue(e.target.textContent)}>
                5
            </span>, // 5
            <span key={"6"} onClick={(e) => changeValue(e.target.textContent)}>
                6
            </span>, // 6
            <span
                key={"&ndash;"}
                className="orange"
                onClick={() => changeValue("-")}
            >
                &ndash;
            </span> // минус
        ],
        [
            <span
                key={"&pi;"}
                onClick={(e) => changeValue(e.target.textContent)}
            >
                &pi;
            </span>, // число пи
            <span key={"1"} onClick={(e) => changeValue(e.target.textContent)}>
                1
            </span>, // 1
            <span key={"2"} onClick={(e) => changeValue(e.target.textContent)}>
                2
            </span>, // 2
            <span key={"3"} onClick={(e) => changeValue(e.target.textContent)}>
                3
            </span>, // 3
            <span
                key={"+"}
                className="orange"
                onClick={(e) => changeValue(e.target.textContent)}
            >
                +
            </span> // сложение
        ],
        [
            <span key={"arrowsToggle"}>
                <img src={arrowsToggle} alt="" />
            </span>, // переключение между режимами
            <span key={"e"} onClick={(e) => changeValue(e.target.textContent)}>
                e
            </span>, // знак экспоненты
            <span key={"0"} onClick={(e) => changeValue(e.target.textContent)}>
                0
            </span>, // 0
            <span key={"."} onClick={(e) => changeValue(e.target.textContent)}>
                .
            </span>, // знак точки для разделения целого от дробного
            <span key={"="} onClick={changeResultValue}>
                <img src={equalSymbol} alt="" />
            </span> // знак равно
        ]
    ];

    return (
        <div className="panel">
            {calculatorPanel.map((arrElem, i) => {
                return (
                    <div key={i} className="panel__row">
                        {arrElem.map((arrSubElem, i) => {
                            return (
                                <div key={i} className="panel__col">
                                    <p className="panel__cell">{arrSubElem}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default CalculatorPanel;
