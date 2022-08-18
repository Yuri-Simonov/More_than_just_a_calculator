import React from "react";
import PropTypes from "prop-types";

// Запуск открытия модального окна с результатом
const OpenResultWindow = ({ openResultWindow }) => {
    return (
        <span className="orange" onClick={openResultWindow}>
            GO
        </span>
    );
};

OpenResultWindow.propTypes = {
    openResultWindow: PropTypes.func
};

export default OpenResultWindow;
