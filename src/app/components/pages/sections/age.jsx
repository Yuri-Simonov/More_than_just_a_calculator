import React from "react";
import Title from "../../common/title";
import arrowDown from "../../../images/svg/arrow_down.svg";
import birthday from "../../../images/svg/birthday.svg";

const Age = () => {
    return (
        <div className="container-inner">
            <Title title={"Возраст"} />
            <section className="age">
                <div className="age__values">
                    <div className="age__value">
                        <p className="age__value-name">Дата рождения</p>
                        <p className="age__value-date age__value-date_active">
                            <span>16 авг. 2010</span>
                            <img src={arrowDown} alt="arrow down" />
                        </p>
                    </div>
                    <div className="age__value">
                        <p className="age__value-name">Сегодня</p>
                        <p className="age__value-date">
                            <span>24 авг. 2022</span>
                            <img src={arrowDown} alt="arrow down" />
                        </p>
                    </div>
                </div>
                <div className="age__info">
                    <div className="age__row">
                        <div className="age__col">
                            <h1 className="age__title">Возраст</h1>
                            <p className="age__years">
                                <span className="orange">12</span>лет
                            </p>
                            <p className="age__text">0 месяц</p>
                            <p className="age__text">8 дней</p>
                        </div>
                        <div className="age__col">
                            <h2 className="age__subtitle orange">
                                Следующий день рождения
                            </h2>
                            <img
                                className="age__birthday"
                                src={birthday}
                                alt="23333333333"
                            />
                            <p className="age__text">среда</p>
                            <p className="age__text">11 месяцев</p>
                            <p className="age__text">23 дня</p>
                        </div>
                    </div>
                    <div className="age__row">
                        <div className="age__about">
                            <h2 className="age__subtitle orange">Описание</h2>
                            <div className="age__about-items">
                                <div className="age__about-item">
                                    <p className="age__about-name">Лет</p>
                                    <p className="age__about-number">12</p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Месяцев</p>
                                    <p className="age__about-number">144</p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Недели</p>
                                    <p className="age__about-number">627</p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Дней</p>
                                    <p className="age__about-number">4391</p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Часы</p>
                                    <p className="age__about-number">105384</p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Минуты</p>
                                    <p className="age__about-number">6323040</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Age;
