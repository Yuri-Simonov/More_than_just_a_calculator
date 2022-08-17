import React from "react";
import deleteSymbol from "../../images/svg/delete_symbol.svg";
import PropTypes from "prop-types";

const SimplePanel = ({
    changeValue,
    goOperator,
    plusOrMinus,
    deleteAllSymbols,
    deleteLastSymbol,
    openResultWindow,
    togglePlusOrMinus
}) => {
    const simplePanel = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [" ", 0, "."]
    ];

    const operators = [
        <span key={"C"} className="orange" onClick={deleteAllSymbols} id="C">
            C
        </span>, // удаление математической операции (С)
        <span
            key={"del"}
            className="orange"
            onClick={deleteLastSymbol}
            id="del"
        >
            <img src={deleteSymbol} alt="" />
        </span>, // удаление одного символа из текущей записи в калькуляторе
        <span key={"GO"} className="orange" onClick={openResultWindow} id="GO">
            GO
        </span>, // Запуск открытия модального окна с результатом
        <span
            key={"plusOrMinus"}
            className="orange"
            onClick={togglePlusOrMinus}
            id="plusOrMinus"
        >
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
                {/* Возможно стоит сделать отдельную папочку для операторов и не усложнять себе жизнь. Просто добавить нужные компоненты операторов через условие. */}
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
SimplePanel.defaultProps = {
    goOperator: false,
    plusOrMinus: false
};

SimplePanel.propTypes = {
    changeValue: PropTypes.func.isRequired,
    goOperator: PropTypes.bool,
    plusOrMinus: PropTypes.bool,
    deleteAllSymbols: PropTypes.func,
    deleteLastSymbol: PropTypes.func,
    openResultWindow: PropTypes.func,
    togglePlusOrMinus: PropTypes.func
};

export default SimplePanel;
