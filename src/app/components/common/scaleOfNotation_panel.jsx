import React from "react";
import PropTypes from "prop-types";
import DeleteAllSymbols from "./operators/delete_all_symbols";
import DeleteLastSymbol from "./operators/delete_last_symbol";

const ScaleOfNotationPanel = ({
    changeValue,
    deleteAllSymbols,
    deleteLastSymbol,
    activeScaleOfNomination
}) => {
    let BIN = false;
    let OCT = false;
    // let DEC = false;
    let HEX = false;

    switch (activeScaleOfNomination) {
        case "BIN":
            BIN = true;
            break;
        case "OCT":
            OCT = true;
            break;
        // case "DEC":
        //     DEC = true;
        //     break;
        case "HEX":
            HEX = true;
            break;

        default:
            break;
    }

    return (
        <section className="simple-panel">
            <div className="simple-panel__body">
                <article className="simple-panel__prime prime">
                    <div
                        className={`${
                            !HEX ? "opacity prime__row" : "prime__row"
                        } `}
                    >
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    F
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    E
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    D
                                </span>
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${
                            !HEX ? "opacity prime__row" : "prime__row"
                        } `}
                    >
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    C
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    B
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    A
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className={"prime__row"}>
                        <div
                            className={`${
                                BIN ? "opacity prime__col" : "prime__col"
                            } `}
                        >
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    7
                                </span>
                            </p>
                        </div>
                        <div
                            className={`${
                                BIN || OCT ? "opacity prime__col" : "prime__col"
                            } `}
                        >
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    8
                                </span>
                            </p>
                        </div>
                        <div
                            className={`${
                                BIN || OCT ? "opacity prime__col" : "prime__col"
                            } `}
                        >
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    9
                                </span>
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${
                            BIN ? "opacity prime__row" : "prime__row"
                        } `}
                    >
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    4
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    5
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    6
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className={"prime__row"}>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    1
                                </span>
                            </p>
                        </div>

                        <div
                            className={`${
                                BIN ? "opacity prime__col" : "prime__col"
                            } `}
                        >
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    2
                                </span>
                            </p>
                        </div>

                        <div
                            className={`${
                                BIN ? "opacity prime__col" : "prime__col"
                            } `}
                        >
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    3
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={"prime__row"}>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    0
                                </span>
                            </p>
                        </div>
                        <div className="prime__col">
                            <p className="prime__cell">
                                <span
                                    onClick={(e) =>
                                        changeValue(e.target.textContent)
                                    }
                                >
                                    .
                                </span>
                            </p>
                        </div>
                    </div>
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
    deleteAllSymbols: PropTypes.func,
    deleteLastSymbol: PropTypes.func,
    activeScaleOfNomination: PropTypes.string
};

export default ScaleOfNotationPanel;
