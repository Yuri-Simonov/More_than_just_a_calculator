import React from "react";
import PropTypes from "prop-types";

const CalculateButton = ({ toggleModalWindow }) => {
    return (
        <button
            className="calculate-button"
            type="button"
            onClick={toggleModalWindow}
        >
            Рассчитать
        </button>
    );
};

CalculateButton.propTypes = {
    toggleModalWindow: PropTypes.func
};

export default CalculateButton;
