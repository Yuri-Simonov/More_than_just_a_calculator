import React from "react";
import PropTypes from "prop-types";
import changeWords from "../../utils/changeWords";

const Duration = ({ duration, toggleDurationModal, text }) => {
    return (
        <article className="duration">
            <h2 className="duration__title">{text}</h2>
            <p className="duration__time" onClick={toggleDurationModal}>
                <span>
                    {duration.years} {changeWords(duration.years, "year")}{" "}
                    {duration.months} {changeWords(duration.months, "month")}
                </span>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <g data-name="Layer 2" id="Layer_2">
                        <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
                    </g>
                </svg>
            </p>
        </article>
    );
};

Duration.propTypes = {
    duration: PropTypes.object,
    toggleDurationModal: PropTypes.func,
    text: PropTypes.string
};

export default Duration;
