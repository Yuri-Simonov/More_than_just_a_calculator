import React from "react";
import PropTypes from "prop-types";
import LinkBack from "./link_back";

const Title = ({ title }) => {
    return (
        <div className="title">
            <h1>{title}</h1>
            <LinkBack />
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

export default Title;
