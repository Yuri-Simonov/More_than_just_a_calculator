import React from "react";
import PropTypes from "prop-types";

const BWMResult = ({ finalResult }) => {
    return (
        <section className="bwm-result">
            <div className="bwm-result__body">
                <article className="bwm-result__total">
                    <div className="bwm-result__result orange">
                        <p>{finalResult}</p>
                    </div>
                    <div className="bwm-result__about">
                        <h1 className="bwm-result__title">ИМТ</h1>
                        <p className="bwm-result__status blue">Норма</p>
                    </div>
                </article>
                <article className="bwm-result__info">
                    <h2 className="bwm-result__subtitle">Информация</h2>
                    <div className="bwm-result__names">
                        <p className="bwm-result__name blue">Недостаток веса</p>
                        <p className="bwm-result__name green">Норма</p>
                        <p className="bwm-result__name red">Избыточный вес</p>
                    </div>
                    <div className="bwm-result__scale"></div>
                    <div className="bwm-result__numbers">
                        <p className="bwm-result__number">16.0</p>
                        <p className="bwm-result__number">18.5</p>
                        <p className="bwm-result__number">25.0</p>
                        <p className="bwm-result__number">40.0</p>
                    </div>
                </article>
            </div>
            <div className="bwm-result__overlay"></div>
        </section>
    );
};

BWMResult.propTypes = {
    finalResult: PropTypes.number
};

export default BWMResult;
