import React from "react";
import PropTypes from "prop-types";

// Изменение с положительного на отрицательное значение и наоборот
const TogglePlusOrMinus = ({ togglePlusOrMinus }) => {
    return (
        <span className="orange" onClick={togglePlusOrMinus}>
            +/-
        </span>
    );
};

TogglePlusOrMinus.propTypes = {
    togglePlusOrMinus: PropTypes.func
};

export default TogglePlusOrMinus;
