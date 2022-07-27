import React from "react";
import { Link } from "react-router-dom";
import svgCalculator from "../../images/svg/calculator.svg";
import svgSections from "../../images/svg/sections.svg";
import svgFinance from "../../images/svg/finance.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container-outer">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li>
                            <Link to="/" className="header__link">
                                <img
                                    src={svgCalculator}
                                    alt="calculator icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/sections" className="header__link">
                                <img src={svgSections} alt="sections icon" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/finance" className="header__link">
                                <img src={svgFinance} alt="finance icon" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
