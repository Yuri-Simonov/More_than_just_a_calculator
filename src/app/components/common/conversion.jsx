import React from "react";
import PropTypes from "prop-types";

const Conversion = ({
    measures,
    toggleSelect,
    firstSelectValue,
    secondSelectValue,
    firstResultValue,
    secondResultValue,
    toggleActiveField,
    activeField
}) => {
    return (
        <section className="conversion">
            <div className="conversion__body">
                <div className="conversion__item">
                    <div className="conversion__select">
                        <select
                            name="first"
                            id="first"
                            value={firstSelectValue.shortName}
                            onChange={(e) =>
                                toggleSelect(e.target.id, e.target.value)
                            }
                        >
                            {measures.map((meas, i) => {
                                return (
                                    <option key={i} value={meas.shortName}>
                                        {meas.fullName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
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
                        <p className="conversion__measure">
                            {firstSelectValue.fullName}
                        </p>
                    </div>
                </div>
                <div className="conversion__item">
                    <div className="conversion__select">
                        <select
                            name="second"
                            id="second"
                            value={secondSelectValue.shortName}
                            onChange={(e) =>
                                toggleSelect(e.target.id, e.target.value)
                            }
                        >
                            {measures.map((meas, i) => {
                                return (
                                    <option key={i} value={meas.shortName}>
                                        {meas.fullName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
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
                        <p className="conversion__measure">
                            {secondSelectValue.fullName}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

Conversion.propTypes = {
    measures: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func,
    toggleActiveField: PropTypes.func,
    firstSelectValue: PropTypes.object,
    secondSelectValue: PropTypes.object,
    firstResultValue: PropTypes.string,
    secondResultValue: PropTypes.string,
    activeField: PropTypes.number
};

export default Conversion;
