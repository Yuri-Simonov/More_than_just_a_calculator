import React from "react";
import deleteSymbol from "../../../images/svg/delete_symbol.svg";

// удаление одного символа из текущей записи в калькуляторе
const DeleteLastSymbol = () => {
    return (
        <span className="orange">
            <img src={deleteSymbol} alt="delete last symbols" />
        </span>
    );
};

export default DeleteLastSymbol;
