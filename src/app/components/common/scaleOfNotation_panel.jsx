import React from "react";
import PropTypes from "prop-types";
import DeleteAllSymbols from "./operators/delete_all_symbols";
import DeleteLastSymbol from "./operators/delete_last_symbol";
import { scaleOfNotationPanel } from "../../consts/scaleOfNotation_panel";

const ScaleOfNotationPanel = ({
    changeValue,
    deleteAllSymbols,
    deleteLastSymbol
}) => {
    return (
        <section className="simple-panel">
            <div className="simple-panel__body">
                <article className="simple-panel__prime prime">
                    {scaleOfNotationPanel.map((arrElem, i) => {
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
                    <div className="operators__item" onClick={deleteAllSymbols}>
                        <DeleteAllSymbols />
                    </div>
                    <div className="operators__item" onClick={deleteLastSymbol}>
                        <DeleteLastSymbol />
                    </div>
                </article>
            </div>
        </section>
    );
};

ScaleOfNotationPanel.propTypes = {
    changeValue: PropTypes.func.isRequired,
    goOperator: PropTypes.bool,
    plusOrMinus: PropTypes.bool,
    deleteAllSymbols: PropTypes.func,
    deleteLastSymbol: PropTypes.func,
    openResultWindow: PropTypes.func,
    togglePlusOrMinus: PropTypes.func,
    toggleOpenOrCloseModal: PropTypes.func
};

export default ScaleOfNotationPanel;
