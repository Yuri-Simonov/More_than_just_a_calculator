import React from "react";
import PropTypes from "prop-types";

const Conversion = ({
    measures,
    toggleSelect,
    firstSelectValue,
    secondSelectValue,
    firstResultValue,
    secondResultValue
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
                        <p className="conversion__result conversion__result_active">
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
                        <p className="conversion__result">
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
    toggleSelect: PropTypes.func.isRequired,
    firstSelectValue: PropTypes.object,
    secondSelectValue: PropTypes.object,
    firstResultValue: PropTypes.string,
    secondResultValue: PropTypes.string
};

export default Conversion;
