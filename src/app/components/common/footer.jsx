import React from "react";

const Footer = () => {
    const getCurrentYear = () => {
        if (new Date().getFullYear() === 2022) {
            return `${new Date().getFullYear()}`;
        } else {
            return `${2022 - new Date().getFullYear()}`;
        }
    };

    return (
        <footer className="footer">
            <div className="container-outer">
                <div className="footer__body">
                    <p className="footer__date">{getCurrentYear()}</p>
                    <p className="footer__copyright">© Все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
