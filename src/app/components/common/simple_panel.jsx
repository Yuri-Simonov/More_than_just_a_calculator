import React from "react";
import deleteSymbol from "../../images/svg/delete_symbol.svg";
import PropTypes from "prop-types";

const SimplePanel = ({ changeValue }) => {
    const simplePanel = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [" ", 0, "."]
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
                                                <span
                                                    onClick={(e) =>
                                                        changeValue(
                                                            e.target.textContent
                                                        )
                                                    }
                                                >
                                                    {arrSubElem}
                                                </span>
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

SimplePanel.propTypes = {
    changeValue: PropTypes.func.isRequired
};

export default SimplePanel;
