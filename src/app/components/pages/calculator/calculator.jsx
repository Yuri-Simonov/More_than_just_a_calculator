import React from "react";

const Calculator = () => {
    const calculatorPanel = [
        ["2nd", "deg", "sin", "cos", "tan"],
        ["x**(1/2)", "lg", "ln", "(", ")"]
    ];
    const createCalculaterPanel = (arr) => {
        return arr.map((arrElem, i) => {
            return (
                <div key={i} className="panel__row">
                    {arrElem.map((arrSubElem, i) => {
                        return (
                            <div key={i} className="panel__col">
                                <p className="panel__cell">{arrSubElem}</p>
                            </div>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <section className="calculator">
            <div className="container-outer">
                <div className="calculator__body">
                    <div className="calculator__panel panel">
                        {createCalculaterPanel(calculatorPanel)}
                    </div>
                    <div className="calculator__field">
                        <section className="calculator__history">
                            <div className="calculator__history-item">
                                <p>2002232 - 32323</p>
                                <p>= 232321</p>
                            </div>
                        </section>
                        <section className="calculator__value">
                            <p>111</p>
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
