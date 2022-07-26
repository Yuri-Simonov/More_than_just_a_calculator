import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <p>
                <Link to="/">calc</Link>
            </p>
            <p>
                <Link to="/sections">sections</Link>
            </p>
            <p>
                <Link to="/finance">finance</Link>
            </p>
        </div>
    );
};

export default Header;
