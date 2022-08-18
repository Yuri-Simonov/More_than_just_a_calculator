import React from "react";
import PropTypes from "prop-types";
import DeleteAllSymbols from "./operators/delete_all_symbols";
import DeleteLastSymbol from "./operators/delete_last_symbol";
import OpenResultWindow from "./operators/open_result_window";
import TogglePlusOrMinus from "./operators/toggle_plus_or_minus";

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
                    <div className="operators__item">
                        <DeleteAllSymbols deleteAllSymbols={deleteAllSymbols} />
                    </div>
                    <div className="operators__item">
                        <DeleteLastSymbol deleteLastSymbol={deleteLastSymbol} />
                    </div>
                    {goOperator && (
                        <div className="operators__item">
                            <OpenResultWindow
                                openResultWindow={openResultWindow}
                            />
                        </div>
                    )}
                    {plusOrMinus && (
                        <div className="operators__item">
                            <TogglePlusOrMinus
                                togglePlusOrMinus={togglePlusOrMinus}
                            />
                        </div>
                    )}
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
