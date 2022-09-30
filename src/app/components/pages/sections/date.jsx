import React from "react";
import Title from "../../common/title";
import arrowDown from "../../../images/svg/arrow_down.svg";
import { useTime } from "../../../hooks/useTime";
import ChoiceOfTime from "../../common/modal_windows/choice_of_time";
import changeWords from "../../../utils/changeWords";

const DateDifference = () => {
    const today = new Date();
    const someDay = new Date(2010, 7, 17, 11, 59);
    const initialAgeState = [someDay, today];

    const {
        age,
        datesSimple,
        openOrCloseModalWindow,
        activeField,
        changeActiveField,
        toggleCloseOrOpenModalWindow,
        changeOneOfDates,
        activeSlide
    } = useTime(initialAgeState);

    return (
        <div className="container-inner">
            <Title title={"Дата"} />
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
                            <h1 className="age__title">Разница дат</h1>
                            <div className="age__wrapper">
                                <p className="age__years age__years_middle">
                                    <span className="orange">{age.years} </span>
                                    {changeWords(age.years, "year")}
                                </p>
                                <p className="age__text age__text_middle">
                                    {age.months}{" "}
                                    {changeWords(age.months, "month")}
                                </p>
                                <p className="age__text age__text_middle">
                                    {age.days} {changeWords(age.days, "day")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="age__row">
                        <div className="age__different">
                            <article className="age__different-item">
                                <h3 className="age__different-title orange">
                                    C
                                </h3>
                                <p className="age__different-text">
                                    {datesSimple[0]}
                                </p>
                            </article>
                            <article className="age__different-item">
                                <h3 className="age__different-title orange">
                                    До
                                </h3>
                                <div className="age__different-text">
                                    <p>{datesSimple[1]}</p>
                                </div>
                            </article>
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

export default DateDifference;
