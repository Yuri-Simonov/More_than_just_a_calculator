import React from "react";
import PropTypes from "prop-types";

const Conversion = ({ measures, toggleSelect, firstValue, secondValue }) => {
    return (
        <section className="conversion">
            <div className="conversion__body">
                <div className="conversion__item">
                    <div className="conversion__select">
                        <select
                            name="first"
                            id="first"
                            value={firstValue}
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
                            1
                        </p>
                        <p className="conversion__measure">Мегабайт</p>
                    </div>
                </div>
                <div className="conversion__item">
                    <div className="conversion__select">
                        <select
                            name="second"
                            id="second"
                            value={secondValue}
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
                        <p className="conversion__result">1024</p>
                        <p className="conversion__measure">Килобайт</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

Conversion.propTypes = {
    measures: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    firstValue: PropTypes.string,
    secondValue: PropTypes.string
};

export default Conversion;
