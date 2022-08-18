import React from "react";
import PropTypes from "prop-types";
import deleteSymbol from "../../../images/svg/delete_symbol.svg";

// удаление одного символа из текущей записи в калькуляторе
const DeleteLastSymbol = ({ deleteLastSymbol }) => {
    return (
        <span className="orange" onClick={deleteLastSymbol}>
            <img src={deleteSymbol} alt="delete last symbols" />
        </span>
    );
};

DeleteLastSymbol.propTypes = {
    deleteLastSymbol: PropTypes.func
};

export default DeleteLastSymbol;
