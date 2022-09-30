import React from "react";
import Title from "../../common/title";
import arrowDown from "../../../images/svg/arrow_down.svg";
import birthday from "../../../images/svg/birthday.svg";
import { useTime } from "../../../hooks/useTime";
import ChoiceOfTime from "../../common/modal_windows/choice_of_time";
import changeWords from "../../../utils/changeWords";

const Age = () => {
    const today = new Date();
    const someDay = new Date(2010, 7, 17, 11, 59);
    const initialAgeState = [someDay, today];

    const {
        age,
        ageStatistics,
        datesSimple,
        nextBirthday,
        openOrCloseModalWindow,
        activeField,
        changeActiveField,
        toggleCloseOrOpenModalWindow,
        changeOneOfDates,
        activeSlide
    } = useTime(initialAgeState);

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
                                <span className="orange">{age.years}</span>
                                {changeWords(age.years, "year")}
                            </p>
                            <p className="age__text">
                                {age.months} {changeWords(age.months, "month")}
                            </p>
                            <p className="age__text">
                                {age.days} {changeWords(age.days, "day")}
                            </p>
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
                                    {nextBirthday.leftMonths}{" "}
                                    {changeWords(
                                        nextBirthday.leftMonths,
                                        "month"
                                    )}
                                </p>
                                <p className="age__text">
                                    {nextBirthday.leftDays}{" "}
                                    {changeWords(nextBirthday.leftDays, "day")}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="age__row">
                        <div className="age__about">
                            <h2 className="age__subtitle orange">Описание</h2>
                            <div className="age__about-items">
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(
                                            ageStatistics.years,
                                            "year"
                                        )}
                                    </p>
                                    <p className="age__about-number">
                                        {ageStatistics.years}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(
                                            ageStatistics.months,
                                            "month"
                                        )}
                                    </p>
                                    <p className="age__about-number">
                                        {ageStatistics.months}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(
                                            ageStatistics.weeks,
                                            "week"
                                        )}
                                    </p>
                                    <p className="age__about-number">
                                        {ageStatistics.weeks}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(ageStatistics.days, "day")}
                                    </p>
                                    <p className="age__about-number">
                                        {ageStatistics.days}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(
                                            ageStatistics.hours,
                                            "hour"
                                        )}
                                    </p>
                                    <p className="age__about-number">
                                        {ageStatistics.hours}
                                    </p>
                                </div>
                                <div className="age__about-item">
                                    <p className="age__about-name">
                                        {changeWords(
                                            ageStatistics.minutes,
                                            "minute"
                                        )}
                                    </p>
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
                activeField={activeField}
                activeSlide={activeSlide}
            />
        </div>
    );
};

export default Age;
