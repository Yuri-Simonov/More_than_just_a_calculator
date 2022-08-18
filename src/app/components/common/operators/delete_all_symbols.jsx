import React from "react";
import PropTypes from "prop-types";

// удаление математической операции (С)
const DeleteAllSymbols = ({ deleteAllSymbols }) => {
    return (
        <span className="orange" onClick={deleteAllSymbols}>
            C
        </span>
    );
};

DeleteAllSymbols.propTypes = {
    deleteAllSymbols: PropTypes.func
};

export default DeleteAllSymbols;
