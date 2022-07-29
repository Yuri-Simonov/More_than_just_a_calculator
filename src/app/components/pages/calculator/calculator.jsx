import React from "react";
import calculatorPanel from "../../../consts/calculatorPanel.jsx";
import { useCalculator } from "../../../hooks/useCalculator.jsx";

const Calculator = () => {
    const { value, changeValue, finalValue } = useCalculator();

    return (
        <section className="calculator">
            <div className="container-inner">
                <div className="calculator__body">
                    <div className="calculator__panel panel">
                        {calculatorPanel.map((arrElem, i) => {
                            return (
                                <div key={i} className="panel__row">
                                    {arrElem.map((arrSubElem, i) => {
                                        return (
                                            <div key={i} className="panel__col">
                                                <p
                                                    className="panel__cell"
                                                    onClick={(e) =>
                                                        changeValue(e)
                                                    }
                                                >
                                                    {arrSubElem}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className="calculator__field">
                        <section className="calculator__history">
                            <div className="calculator__history-item">
                                <p>2002232 - 32323</p>
                                <p>= 232321</p>
                            </div>
                        </section>
                        <section className="calculator__value big-size">
                            <p>{value}</p>
                        </section>
                        <section className="calculator__result">
                            <p>= {finalValue}</p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
