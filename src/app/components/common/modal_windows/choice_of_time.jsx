import React from "react";
import PropTypes from "prop-types";

const ChoiceOfTime = () => {
    // const classOfModal =
    //     "choice-time" + (openOrCloseModal ? "choice-time_active" : "");

    return (
        <div className="choice-time choice-time_active">
            <div className="choice-time__body">
                <div className="choice-time__item">1</div>
                <div className="choice-time__item">2</div>
                <div className="choice-time__item">3</div>
            </div>
        </div>
    );
};

ChoiceOfTime.propTypes = {};

export default ChoiceOfTime;
