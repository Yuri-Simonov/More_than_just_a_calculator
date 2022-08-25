import React, { useEffect } from "react";
import Title from "../../common/title";
import arrowDown from "../../../images/svg/arrow_down.svg";
import birthday from "../../../images/svg/birthday.svg";
import OwnSwiper from "../../common/swiper";
import { useTime } from "../../../hooks/useTime";

const Age = () => {
    const today = new Date();
    const someDay = new Date(2010, 7, 17);
    const initialAgeState = [someDay, today];

    const { age, datesSimple, changeAge } = useTime(initialAgeState);
    useEffect(() => {
        changeAge();
    }, []);

    return (
        <div className="container-inner">
            <Title title={"Возраст"} />
            <section className="age">
                <div className="age__values">
                    <div className="age__value">
                        <p className="age__value-name">Дата рождения</p>
                        <p className="age__value-date age__value-date_active">
                            <span>{datesSimple[0]}</span>
                            <img src={arrowDown} alt="arrow down" />
                        </p>
                    </div>
                    <div className="age__value">
                        <p className="age__value-name">Сегодня</p>
                        <p className="age__value-date">
                            <span>{datesSimple[1]}</span>
                            <img src={arrowDown} alt="arrow down" />
                        </p>
                    </div>
                </div>
                <div className="age__info">
                    <div className="age__row">
                        <div className="age__col">
                            <h1 className="age__title">Возраст</h1>
                            <p className="age__years">
                                <span className="orange">{age.years}</span>лет
                            </p>
                            <p className="age__text">{age.months} месяц</p>
                            <p className="age__text">{age.days} дней</p>
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
                            <p className="age__text orange">Осталось</p>
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
            <OwnSwiper />
        </div>
    );
};

export default Age;
