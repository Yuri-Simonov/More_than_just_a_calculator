import React from "react";
import { Link } from "react-router-dom";
import { allFinances } from "../../../consts/finances";

const Finance = () => {
    return (
        <section className="sections">
            <div className="container-inner">
                <div className="sections__flex">
                    {allFinances.map((finance, i) => {
                        return (
                            <div key={i} className="sections__item">
                                <Link to={`/finances/${finance.link}`}>
                                    <article className="sections__item-wrapper">
                                        <div className="sections__item-logo">
                                            <img
                                                src={finance.logo}
                                                alt={`${finance.alt}`}
                                            />
                                        </div>
                                        <h1 className="sections__item-title">
                                            {finance.title}
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

export default Finance;
