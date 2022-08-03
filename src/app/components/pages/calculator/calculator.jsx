import React from "react";
import { useCalculator } from "../../../hooks/useCalculator.jsx";
import CalculatorPanel from "./calculatorPanel.jsx";

const Calculator = () => {
    const {
        value,
        resultValue,
        preliminaryResult,
        bigOrLittleValue,
        historyOfCalculation
    } = useCalculator();
    return (
        <section className="calculator">
            <div className="container-inner">
                <div className="calculator__body">
                    <div className="calculator__panel">
                        <CalculatorPanel />
                    </div>
                    <div className="calculator__field">
                        <section className="calculator__history">
                            {historyOfCalculation.map((elem, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="calculator__history-item"
                                    >
                                        <p>{elem.value}</p>
                                        <p>= {elem.resultValue}</p>
                                    </div>
                                );
                            })}
                        </section>
                        <section
                            className={
                                bigOrLittleValue
                                    ? "calculator__value"
                                    : "calculator__value big-size"
                            }
                        >
                            <p>{value}</p>
                        </section>
                        <section
                            className={
                                bigOrLittleValue
                                    ? "calculator__result big-size"
                                    : "calculator__result"
                            }
                        >
                            {preliminaryResult && <p>= {resultValue}</p>}
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
