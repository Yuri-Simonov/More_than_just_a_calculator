import React from "react";

const RadioButtons = () => {
    return (
        <div className="radio-buttons">
            <label className="radio-buttons__label">
                <input
                    className="radio-buttons__fake"
                    type="radio"
                    name="radio-buttons"
                    checked
                />
                <span className="radio-buttons__real"></span>
                <span className="radio-buttons__text">Однократно</span>
            </label>
            <label className="radio-buttons__label">
                <input
                    className="radio-buttons__fake"
                    type="radio"
                    name="radio-buttons"
                />
                <span className="radio-buttons__real"></span>
                <span className="radio-buttons__text">Периодически</span>
            </label>
        </div>
    );
};

export default RadioButtons;
