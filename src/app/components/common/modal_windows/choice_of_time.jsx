import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper";
import PropTypes from "prop-types";
import { days, months, years } from "../../../consts/calendar";

const ChoiceOfTime = ({
    openOrCloseModalWindow,
    toggleCloseOrOpenModalWindow,
    changeOneOfDates,
    datesSimple,
    activeField,
    activeSlide,
    changeActiveSlide
}) => {
    const classOfModal =
        "choice-time " + (openOrCloseModalWindow ? "choice-time_active" : "");

    const daysOfCalendar = days.map((num) => {
        return (
            <SwiperSlide key={`slide-${num}`}>
                <div className="choice-time__item">{num}</div>
            </SwiperSlide>
        );
    });

    const monthsOfCalendar = months.map((num) => {
        return (
            <SwiperSlide key={`slide-${num}`}>
                <div className="choice-time__item">{num}</div>
            </SwiperSlide>
        );
    });

    const yearsOfCalendar = years.map((num) => {
        return (
            <SwiperSlide key={`slide-${num}`}>
                <div className="choice-time__item">{num}</div>
            </SwiperSlide>
        );
    });

    const activeDay =
        activeField === 1 ? activeSlide[0][0] - 1 : activeSlide[1][0] - 1;
    // let activeMonth;
    // let activeYear;

    return (
        <div className={classOfModal}>
            <div className="choice-time__body">
                <h2 className="choice-time__title">
                    {activeField === 1 ? "День рождения" : "Сегодня"}
                </h2>
                <div className="choice-time__items">
                    <div className="own-swiper own-swiper_days">
                        <Swiper
                            id="days"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            mousewheel={true}
                            modules={[Mousewheel]}
                            initialSlide={activeDay}
                        >
                            {daysOfCalendar}
                        </Swiper>
                    </div>
                    <div className="own-swiper own-swiper_months">
                        <Swiper
                            id="months"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            mousewheel={true}
                            modules={[Mousewheel]}
                            initialSlide={
                                activeField === 1
                                    ? activeSlide[0][1] - 1
                                    : activeSlide[1][1] - 1
                            }
                        >
                            {monthsOfCalendar}
                        </Swiper>
                    </div>
                    <div className="own-swiper own-swiper_years">
                        <Swiper
                            id="years"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            mousewheel={true}
                            modules={[Mousewheel]}
                            initialSlide={
                                activeField === 1
                                    ? activeSlide[0][2] - 1900
                                    : activeSlide[1][2] - 1900
                            }
                        >
                            {yearsOfCalendar}
                        </Swiper>
                    </div>
                </div>
                <div className="choice-time__btns">
                    <button onClick={() => changeOneOfDates(27, 5, 2000)}>
                        ОK
                    </button>
                    <button onClick={toggleCloseOrOpenModalWindow}>
                        Отмена
                    </button>
                </div>
            </div>
            <div
                className="choice-time__overlay"
                onClick={toggleCloseOrOpenModalWindow}
            ></div>
        </div>
    );
};

ChoiceOfTime.propTypes = {
    openOrCloseModalWindow: PropTypes.bool,
    toggleCloseOrOpenModalWindow: PropTypes.func,
    changeOneOfDates: PropTypes.func,
    datesSimple: PropTypes.array,
    activeField: PropTypes.number,
    activeSlide: PropTypes.array,
    changeActiveSlide: PropTypes.func
};

export default ChoiceOfTime;
