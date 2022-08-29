import React, { useEffect } from "react";
import Title from "../../common/title";
import arrowDown from "../../../images/svg/arrow_down.svg";
import birthday from "../../../images/svg/birthday.svg";
import { useTime } from "../../../hooks/useTime";
import ChoiceOfTime from "../../common/modal_windows/choice_of_time";

const Age = () => {
    const today = new Date();
    const someDay = new Date(2010, 7, 17, 11, 59);
    const initialAgeState = [someDay, today];

    const {
        age,
        ageStatistics,
        datesSimple,
        changeAge,
        nextBirthday,
        openOrCloseModalWindow,
        activeField,
        changeActiveField,
        toggleCloseOrOpenModalWindow,
        changeOneOfDates
    } = useTime(initialAgeState);
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
                        <p
                            className={
                                activeField === 1
                                    ? "age__value-date cr-1 age__value-date_active"
                                    : "age__value-date cr-1"
                            }
                            onClick={(e) => changeActiveField(e)}
                        >
                            <span>{datesSimple[0]}</span>
                            <img src={arrowDown} alt="arrow down" />
                        </p>
                    </div>
                    <div className="age__value">
                        <p className="age__value-name">Сегодня</p>
                        <p
                            className={
                                activeField === 2
                                    ? "age__value-date cr-2 age__value-date_active"
                                    : "age__value-date cr-2"
                            }
                            onClick={(e) => changeActiveField(e)}
                        >
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
                        {nextBirthday && (
                            <div className="age__col">
                                <h2 className="age__subtitle orange">
                                    Следующий день рождения
                                </h2>
                                <img
                                    className="age__birthday"
                                    src={birthday}
                                    alt="23333333333"
                                />
                                <p className="age__text">
                                    {nextBirthday.dayOfWeek}
                                </p>
                                <p className="age__text orange">Осталось</p>
                                <p className="age__text">
                                    {nextBirthday.leftMonths} месяцев
                                </p>
                                <p className="age__text">
                                    {nextBirthday.leftDays} дня
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="age__row">
                        <div className="age__about">
                            <h2 className="age__subtitle orange">Описание</h2>
                            <div className="age__about-items">
                                <div className="age__about-item">
                                    <p className="age__about-name">Лет</p>
                                    <p className="age__about-number">
                                        {ageStatistics.years}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Месяцев</p>
                                    <p className="age__about-number">
                                        {ageStatistics.months}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Недели</p>
                                    <p className="age__about-number">
                                        {ageStatistics.weeks}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Дней</p>
                                    <p className="age__about-number">
                                        {ageStatistics.days}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Часы</p>
                                    <p className="age__about-number">
                                        {ageStatistics.hours}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">Минуты</p>
                                    <p className="age__about-number">
                                        {ageStatistics.minutes}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChoiceOfTime
                openOrCloseModalWindow={openOrCloseModalWindow}
                toggleCloseOrOpenModalWindow={toggleCloseOrOpenModalWindow}
                changeOneOfDates={changeOneOfDates}
            />
        </div>
    );
};

export default Age;
