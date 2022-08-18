import React from "react";
import { Link } from "react-router-dom";
import { allSections } from "../../../consts/sections";

const Sections = () => {
    return (
        <section className="sections">
            <div className="container-inner">
                <div className="sections__flex">
                    {allSections.map((section, i) => {
                        return (
                            <div key={i} className="sections__item">
                                <Link to={`/sections/${section.link}`}>
                                    <article className="sections__item-wrapper">
                                        <div className="sections__item-logo">
                                            <img
                                                src={section.logo}
                                                alt={`${section.alt}`}
                                            />
                                        </div>
                                        <h1 className="sections__item-title">
                                            {section.title}
                                        </h1>
                                    </article>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sections;
