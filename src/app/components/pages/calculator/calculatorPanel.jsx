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
        deleteAllSymbols,
        firstLineOperators,
        toggleFirstLineOperators,
        extendedCalc,
        toggleExtendedCalc
    } = useCalculator();

    // Панель калькулятора
    const calculatorPanel = [
        [
            <span
                key={"2nd"}
                className="extended-child"
                onClick={toggleFirstLineOperators}
            >
                2nd
            </span>, // переключатель между sin/arcsin и тд.
            <span
                key={"deg"}
                className="extended-child"
                onClick={(e) => changeValue(`${e.target.textContent}`)}
            >
                deg
            </span>, // градусы
            <span
                key={"sin"}
                className="extended-child"
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                {firstLineOperators ? "sin" : "arcsin"}
            </span>, // синус/аркосинус
            <span
                key={"cos"}
                className="extended-child"
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                {firstLineOperators ? "cos" : "arccos"}
            </span>, // косинус/аркосинус
            <span
                key={"tan"}
                className="extended-child"
                onClick={(e) => changeValue(`${e.target.textContent + "("}`)}
            >
                {firstLineOperators ? "tan" : "arctan"}
            </span> // тангенс/арктангенс
        ],
        [
            <span key={"x**y"} onClick={(e) => changeValue("^")}>
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
            <span
                key={"&#8730;"}
                onClick={(e) => changeValue(e.target.textContent)}
            >
                &#8730;
            </span>, // знак корня
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
            <span key={"1/x"} onClick={(e) => changeValue("^(-1)")}>
                1/x
            </span>, // обратное к числу/выражению
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
            <span key={"arrowsToggle"} onClick={toggleExtendedCalc}>
                <img src={arrowsToggle} alt="" />
            </span>, // переключение между режимами
            <span key={"e"} onClick={(e) => changeValue(e.target.textContent)}>
                {extendedCalc ? (
                    "e"
                ) : (
                    <img
                        src={arrowsToggle}
                        alt=""
                        onClick={toggleExtendedCalc}
                    />
                )}
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
                            const findExtendedOperators =
                                arrSubElem.props.className?.includes(
                                    "extended-child"
                                );
                            if (findExtendedOperators) {
                                return (
                                    <div
                                        key={i}
                                        className="panel__col extended-parent"
                                    >
                                        <p className="panel__cell">
                                            {arrSubElem}
                                        </p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={i} className="panel__col">
                                        <p className="panel__cell">
                                            {arrSubElem}
                                        </p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default CalculatorPanel;
