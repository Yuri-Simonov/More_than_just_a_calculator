import React from "react";
import PropTypes from "prop-types";

const Result = ({
    title,
    rangeTotal,
    toggleModalWindow,
    duration,
    totalValue,
    capitalTotal
}) => {
    const capitalWidthLine = (capitalTotal / totalValue) * 100;
    const percentWidthLine = ((totalValue - capitalTotal) / totalValue) * 100;
    const totalPercent = (totalValue - capitalTotal).toFixed(2);

    return (
        <div className="result result_active">
            <div className="result__body">
                <h2 className="result__title">{title}</h2>
                <p className="result__time">
                    {duration.years} года {duration.months} месяц
                </p>
                <p className="result__total orange">&#8381; {totalValue}</p>
                <div className="result__range">
                    {rangeTotal && (
                        <article className="result__range-total">
                            <h2>Итого к оплате</h2>
                            <p>1111111111111</p>
                        </article>
                    )}
                    <div className="result__range-line">
                        <span
                            className="result__range-green"
                            style={{
                                width: capitalWidthLine + "%"
                            }}
                        ></span>
                        <span
                            className="result__range-orange"
                            style={{ width: percentWidthLine + "%" }}
                        ></span>
                    </div>
                    <div className="result__range-items">
                        <article className="result__range-item">
                            <p>Общий капитал</p>
                            <span>{capitalTotal}</span>
                        </article>
                        <article className="result__range-item">
                            <p>Общий процент</p>
                            <span>{totalPercent}</span>
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
    toggleModalWindow: PropTypes.func,
    capital: PropTypes.string,
    percent: PropTypes.string,
    duration: PropTypes.object,
    totalValue: PropTypes.string,
    percentWidth: PropTypes.string,
    capitalTotal: PropTypes.number
};

export default Result;
