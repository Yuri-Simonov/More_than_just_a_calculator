import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({ title, placeholder }) => {
    return (
        <label className="number-input">
            <h2 className="number-input__title">{title}</h2>
            <input
                className="number-input__field"
                type="text"
                name="number-input"
                placeholder={placeholder}
            />
        </label>
    );
};

NumberInput.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string
};

export default NumberInput;
