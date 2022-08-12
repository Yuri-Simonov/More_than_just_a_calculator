import React from "react";
import { Link } from "react-router-dom";
import equalSymbol from "../../../images/svg/equal.svg";
import dataLogo from "../../../images/svg/data.svg";
import bodyWeightMeterLogo from "../../../images/svg/body_weight_meter.svg";
import ageLogo from "../../../images/svg/age.svg";

const Sections = () => {
    return (
        <section className="sections">
            <div className="container-inner">
                <div className="sections__flex">
                    <div className="sections__item">
                        <Link to={"/sections/digital_data"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={dataLogo} alt="digital_data" />
                                </div>
                                <h1 className="sections__item-title">Данные</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/body_weight_meter"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img
                                        src={bodyWeightMeterLogo}
                                        alt="body_weight_meter"
                                    />
                                </div>
                                <h1 className="sections__item-title">ИМТ</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/age"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={ageLogo} alt="age" />
                                </div>
                                <h1 className="sections__item-title">
                                    Возраст
                                </h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/discount"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="discount" />
                                </div>
                                <h1 className="sections__item-title">Скидка</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/date"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="date" />
                                </div>
                                <h1 className="sections__item-title">Дата</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/length"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="length" />
                                </div>
                                <h1 className="sections__item-title">Длина</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/square"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="square" />
                                </div>
                                <h1 className="sections__item-title">
                                    Площадь
                                </h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/volume"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="volume" />
                                </div>
                                <h1 className="sections__item-title">Объем</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/temperature"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="temperature" />
                                </div>
                                <h1 className="sections__item-title">
                                    Температура
                                </h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/speed"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="speed" />
                                </div>
                                <h1 className="sections__item-title">
                                    Скорость
                                </h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/time"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="time" />
                                </div>
                                <h1 className="sections__item-title">Время</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/weight"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img src={equalSymbol} alt="weight" />
                                </div>
                                <h1 className="sections__item-title">Масса</h1>
                            </article>
                        </Link>
                    </div>
                    <div className="sections__item">
                        <Link to={"/sections/scale_of_notation"}>
                            <article className="sections__item-wrapper">
                                <div className="sections__item-logo">
                                    <img
                                        src={equalSymbol}
                                        alt="scale_of_notation"
                                    />
                                </div>
                                <h1 className="sections__item-title">
                                    Система исчесления
                                </h1>
                            </article>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sections;
