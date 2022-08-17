import React from "react";
import deleteSymbol from "../../images/svg/delete_symbol.svg";

const SimplePanel = () => {
    const simplePanel = [
        [
            <span key={"7"}>7</span>, // 7
            <span key={"8"}>8</span>, // 8
            <span key={"9"}>9</span> // 9
        ],
        [
            <span key={"4"}>4</span>, // 4
            <span key={"5"}>5</span>, // 5
            <span key={"6"}>6</span> // 6
        ],
        [
            <span key={"1"}>1</span>, // 1
            <span key={"2"}>2</span>, // 2
            <span key={"3"}>3</span> // 3
        ],
        [
            <span key={" "}></span>, // 0
            <span key={"0"}>0</span>, // 0
            <span key={"."}>.</span> // знак точки для разделения целого от дробного
        ]
    ];

    const operators = [
        <span key={"C"} className="orange">
            C
        </span>, // удаление математической операции (С)
        <span key={"del"} className="orange">
            <img src={deleteSymbol} alt="" />
        </span>, // удаление одного символа из текущей записи в калькуляторе
        <span key={"C"} className="orange">
            GO
        </span>, // Запуск открытия модального окна с результатом
        <span key={"C"} className="orange">
            +/-
        </span> // Изменение с положительного на отрицательное значение и наоборот
    ];

    return (
        <section className="simple-panel">
            <div className="simple-panel__body">
                <article className="simple-panel__prime prime">
                    {simplePanel.map((arrElem, i) => {
                        return (
                            <div key={i} className={"prime__row"}>
                                {arrElem.map((arrSubElem, i) => {
                                    return (
                                        <div key={i} className="prime__col">
                                            <p className="prime__cell">
                                                {arrSubElem}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </article>
                <article className="simple-panel__operators operators">
                    {operators.map((oper, i) => {
                        return (
                            <div key={i} className="operators__item">
                                {oper}
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
};

export default SimplePanel;
