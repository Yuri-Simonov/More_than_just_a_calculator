import deleteSymbol from "../images/svg/delete_symbol.svg";
import equalSymbol from "../images/svg/equal.svg";
import arrowsToggle from "../images/svg/arrows_toggle.svg";
import React from "react";
import { useCalculator } from "../hooks/useCalculator";

const { finalResult } = useCalculator();

const calculatorPanel = [
    [
        <span key={"2nd"}>2nd</span>, // переключатель между sin/arcsin и тд.
        <span key={"deg"}>deg</span>, // градусы
        <span key={"sin"}>sin</span>, // синус/аркосинус
        <span key={"cos"}>cos</span>, // косинус/аркосинус
        <span key={"tan"}>tan</span> // тангенс/арктангенс
    ],
    [
        <span key={"x**y"}>
            x<sup>y</sup>
        </span>, // "x" в степени "y"
        <span key={"lg"}>lg</span>, // десятичный логарифм
        <span key={"ln"}>ln</span>, // натуральный логарифм
        <span key={"("}>(</span>, // открывающая скобка
        <span key={")"}>)</span> // закрывающая скобка
    ],
    [
        <span key={"&#8730;"}>&#8730;</span>, // знак корня
        <span key={"C"} className="orange">
            C
        </span>, // удаление математической операции (С) и полное удаление всех математических операций вместе с историей
        <span key={"!!!del!!!"} className="orange">
            <img src={deleteSymbol} alt="" />
        </span>, // удаление одного символа из текущей записи в калькуляторе
        <span key={"%"} className="orange">
            %
        </span>, // проценты
        <span key={"/"} className="orange" data-btnType="operator">
            /
        </span> // знак деления
    ],
    [
        <span key={"x!"}>x!</span>, // факториал от "х"
        <span key={"7"}>7</span>, // 7
        <span key={"8"}>8</span>, // 8
        <span key={"9"}>9</span>, // 9
        <span key={"&#215;"} className="orange" data-btnType="operator">
            &#215;
        </span> // знак умножения
    ],
    [
        <span key={"1/x"}>1/x</span>, // обратное к числу/выражению
        <span key={"4"}>4</span>, // 4
        <span key={"5"}>5</span>, // 5
        <span key={"6"}>6</span>, // 6
        <span key={"&ndash;"} className="orange" data-btnType="operator">
            &ndash;
        </span> // минус
    ],
    [
        <span key={"&pi;"}>&pi;</span>, // число пи
        <span key={"1"}>1</span>, // 1
        <span key={"2"}>2</span>, // 2
        <span key={"3"}>3</span>, // 3
        <span key={"+"} className="orange" data-btnType="operator">
            +
        </span> // сложение
    ],
    [
        <span key={"arrowsToggle"}>
            <img src={arrowsToggle} alt="" />
        </span>, // переключение между режимами
        <span key={"e"}>e</span>, // знак экспоненты
        <span key={"0"}>0</span>, // 0
        <span key={"."}>.</span>, // знак точки для разделения целого от дробного
        <span key={"="} data-btnType="operator" onClick={finalResult}>
            <img src={equalSymbol} alt="" />
        </span> // знак равно
    ]
];

export default calculatorPanel;
