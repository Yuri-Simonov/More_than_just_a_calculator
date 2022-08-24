import React from "react";
import PropTypes from "prop-types";
import { round } from "mathjs";

const ConversionTwoOperators = ({
    measures,
    toggleSelect,
    firstSelectValue,
    secondSelectValue,
    firstResultValue,
    secondResultValue,
    toggleActiveField,
    activeField,
    methodOfCalculation,
    finalResult
}) => {
    return (
        <section className="conversion">
            <div className="conversion__body">
                <div className="conversion__item">
                    {methodOfCalculation === "bodyWeightMeter" && (
                        <div className="conversion__select">
                            <select
                                name="first"
                                id="first"
                                value={firstSelectValue.shortName}
                                onChange={(e) =>
                                    toggleSelect(e.target.id, e.target.value)
                                }
                            >
                                {measures[0].map((meas, i) => {
                                    return (
                                        <option key={i} value={meas.shortName}>
                                            {meas.fullName}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    )}
                    {methodOfCalculation === "discount" && (
                        <p className="conversion__single-measures">
                            Первоначальная цена
                        </p>
                    )}
                    <div className="conversion__value">
                        <p
                            className={
                                activeField === 1
                                    ? "conversion__result cr-1 conversion__result_active"
                                    : "conversion__result cr-1"
                            }
                            onClick={(e) => toggleActiveField(e)}
                        >
                            {firstResultValue}
                        </p>
                        {methodOfCalculation === "bodyWeightMeter" && (
                            <p className="conversion__measure">
                                {firstSelectValue.fullName}
                            </p>
                        )}
                    </div>
                </div>
                <div className="conversion__item">
                    {methodOfCalculation === "bodyWeightMeter" && (
                        <div className="conversion__select">
                            <select
                                name="second"
                                id="second"
                                value={secondSelectValue.shortName}
                                onChange={(e) =>
                                    toggleSelect(e.target.id, e.target.value)
                                }
                            >
                                {measures[1].map((meas, i) => {
                                    return (
                                        <option key={i} value={meas.shortName}>
                                            {meas.fullName}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    )}
                    {methodOfCalculation === "discount" && (
                        <p className="conversion__single-measures">
                            Скидка (%)
                        </p>
                    )}
                    <div className="conversion__value">
                        <p
                            className={
                                activeField === 2
                                    ? "conversion__result cr-2 conversion__result_active"
                                    : "conversion__result cr-2"
                            }
                            onClick={(e) => toggleActiveField(e)}
                        >
                            {secondResultValue}
                        </p>
                        {methodOfCalculation === "bodyWeightMeter" && (
                            <p className="conversion__measure">
                                {secondSelectValue.fullName}
                            </p>
                        )}
                    </div>
                </div>
                {methodOfCalculation === "discount" && (
                    <div className="conversion__item">
                        <p className="conversion__single-measures">
                            Окончательная цена
                        </p>
                        <div className="conversion__value">
                            <p className="conversion__result">{finalResult}</p>
                        </div>
                    </div>
                )}
                {methodOfCalculation === "discount" && (
                    <div className="conversion__prompt">
                        <p>
                            Вы сэкономите{" "}
                            {round(firstResultValue - finalResult, 5)}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

ConversionTwoOperators.propTypes = {
    measures: PropTypes.array,
    toggleSelect: PropTypes.func,
    toggleActiveField: PropTypes.func,
    firstSelectValue: PropTypes.object,
    secondSelectValue: PropTypes.object,
    firstResultValue: PropTypes.string,
    secondResultValue: PropTypes.string,
    methodOfCalculation: PropTypes.string,
    activeField: PropTypes.number,
    finalResult: PropTypes.number
};

export default ConversionTwoOperators;
