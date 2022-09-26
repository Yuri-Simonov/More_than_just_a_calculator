import React from "react";
import PropTypes from "prop-types";

const RadioButtons = ({ activeRadioButton, toggleRadioButtons }) => {
    return (
        <div className="radio-buttons">
            <label className="radio-buttons__label">
                <input
                    className="radio-buttons__fake"
                    type="radio"
                    name="radio-buttons"
                    id="1"
                    checked={activeRadioButton === 1}
                    onChange={() => {
                        toggleRadioButtons(1);
                    }}
                />
                <span className="radio-buttons__real"></span>
                <span className="radio-buttons__text">Однократно</span>
            </label>
            <label className="radio-buttons__label">
                <input
                    className="radio-buttons__fake"
                    type="radio"
                    name="radio-buttons"
                    id="2"
                    checked={activeRadioButton === 2}
                    onChange={() => {
                        toggleRadioButtons(2);
                    }}
                />
                <span className="radio-buttons__real"></span>
                <span className="radio-buttons__text">Периодически</span>
            </label>
        </div>
    );
};

RadioButtons.propTypes = {
    activeRadioButton: PropTypes.number,
    toggleRadioButtons: PropTypes.func
};

export default RadioButtons;
