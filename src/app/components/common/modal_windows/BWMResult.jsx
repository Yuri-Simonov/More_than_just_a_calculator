import React from "react";
import PropTypes, { bool, func } from "prop-types";

const BWMResult = ({
    finalResult,
    openOrCloseModal,
    toggleOpenOrCloseModal
}) => {
    const classOfModal =
        "bwm-result" + (openOrCloseModal ? "bwm-result_active" : "");

    let statusOfName;
    let classOfName;
    if (finalResult >= 16 && finalResult < 18.5) {
        statusOfName = "Недостаток веса";
        classOfName = "bwm-result__status blue";
    } else if (finalResult >= 18.5 && finalResult <= 25) {
        statusOfName = "Норма";
        classOfName = "bwm-result__status green";
    } else if (finalResult > 25 && finalResult <= 40) {
        statusOfName = "Избыточный вес";
        classOfName = "bwm-result__status red";
    }

    return (
        <section className={classOfModal}>
            <div className="bwm-result__body">
                <article className="bwm-result__total">
                    <div className="bwm-result__result orange">
                        <p>{finalResult}</p>
                    </div>
                    <div className="bwm-result__about">
                        <h1 className="bwm-result__title">ИМТ</h1>
                        <p className={classOfName}>{statusOfName}</p>
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
            <div
                className="bwm-result__overlay"
                onClick={toggleOpenOrCloseModal}
            ></div>
        </section>
    );
};

BWMResult.propTypes = {
    finalResult: PropTypes.number,
    openOrCloseModal: bool,
    toggleOpenOrCloseModal: func
};

export default BWMResult;
