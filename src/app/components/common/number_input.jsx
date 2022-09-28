import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({ title, placeholder, changeValue, value }) => {
    return (
        <label className="number-input">
            <h2 className="number-input__title">{title}</h2>
            <input
                className="number-input__field"
                type="number"
                name="number-input"
                placeholder={placeholder}
                onInput={(e) => changeValue(e.target.value)}
                value={value}
            />
        </label>
    );
};

NumberInput.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    changeValue: PropTypes.func
};

export default NumberInput;
