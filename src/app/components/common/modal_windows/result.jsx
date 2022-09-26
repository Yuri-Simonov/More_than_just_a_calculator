import React from "react";
import PropTypes from "prop-types";

const Result = ({ title, rangeTotal, toggleModalWindow }) => {
    return (
        <div className="result result_active">
            <div className="result__body">
                <h2 className="result__title">{title}</h2>
                <p className="result__time">3 года 0 месяц</p>
                <p className="result__total orange">&#8381; 5,8</p>
                <div className="result__range">
                    {rangeTotal && (
                        <article className="result__range-total">
                            <h2>Итого к оплате</h2>
                            <p>6,66</p>
                        </article>
                    )}
                    <div className="result__range-line">
                        <span
                            className="result__range-green"
                            style={{ width: 40 + "%" }}
                        ></span>
                        <span
                            className="result__range-orange"
                            style={{ width: 60 + "%" }}
                        ></span>
                    </div>
                    <div className="result__range-items">
                        <article className="result__range-item">
                            <p>Общий капитал</p>
                            <span>5</span>
                        </article>
                        <article className="result__range-item">
                            <p>Общий процент</p>
                            <span>5</span>
                        </article>
                    </div>
                </div>
            </div>
            <div className="result__overlay" onClick={toggleModalWindow}></div>
        </div>
    );
};

Result.defaultProps = {
    rangeTotal: true
};

Result.propTypes = {
    title: PropTypes.string,
    rangeTotal: PropTypes.bool,
    toggleModalWindow: PropTypes.func
};

export default Result;
