import React from "react";
import PropTypes from "prop-types";

// удаление математической операции (С)
const DeleteAllSymbols = ({ text }) => {
    return <span className="orange">{text}</span>;
};

DeleteAllSymbols.defaultProps = {
    text: "C"
};

DeleteAllSymbols.propTypes = {
    text: PropTypes.string
};

export default DeleteAllSymbols;
