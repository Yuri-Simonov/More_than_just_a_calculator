import React, { useState } from "react";

const Calculator = () => {
    const calculatorPanel = [
        ["2nd", "deg", "sin", "cos", "tan"],
        ["x**y", "lg", "ln", "(", ")"],
        ["x**(1/2)", "C", "del", "%", "/"],
        ["x!", "7", "8", "9", "*"],
        ["1/x", "4", "5", "6", "-"],
        ["п", "1", "2", "3", "+"],
        ["arrows", "e", "0", ",", "="]
    ];

    const [value, setValue] = useState(0);
    const changeValue = (e) => {
        if (value === 0) {
            return setValue(e.target.textContent);
        }
        setValue((prevState) => prevState + e.target.textContent);
    };

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
                            <p>= 111</p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
