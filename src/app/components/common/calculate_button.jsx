import React from "react";
import PropTypes from "prop-types";

const CalculateButton = ({ toggleModalWindow, visibility }) => {
    const visibilityClass = visibility
        ? "calculate-button calculate-button_hidden"
        : "calculate-button";

    return (
        <button
            className={visibilityClass}
            type="button"
            onClick={toggleModalWindow}
        >
            Рассчитать
        </button>
    );
};

CalculateButton.propTypes = {
    toggleModalWindow: PropTypes.func,
    visibility: PropTypes.bool
};

export default CalculateButton;
