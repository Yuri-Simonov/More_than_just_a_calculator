import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper";
import PropTypes from "prop-types";
import { days, months, years } from "../../../consts/calendar";

const ChoiceOfTime = ({
    openOrCloseModalWindow,
    toggleCloseOrOpenModalWindow,
    changeOneOfDates,
    activeField,
    activeSlide
}) => {
    const [currentSlides, setCurrentSlides] = useState(activeSlide);
    console.log("currentSlides", currentSlides);

    const classOfModalFirst =
        "choice-time " +
        (openOrCloseModalWindow[0] ? "choice-time_active" : "");
    const classOfModalSecond =
        "choice-time " +
        (openOrCloseModalWindow[1] ? "choice-time_active" : "");

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

    return (
        <>
            <div className={classOfModalFirst}>
                <div className="choice-time__body">
                    <h2 className="choice-time__title">
                        {activeField === 1 ? "День рождения" : "Сегодня"}
                    </h2>
                    <div className="choice-time__items">
                        <div className="own-swiper own-swiper_days">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            e.activeIndex + 1,
                                            currentSlides[0][1],
                                            currentSlides[0][2]
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            currentSlides[1][2]
                                        ]
                                    ])
                                }
                                id="days-1"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[0][0] - 1}
                            >
                                {daysOfCalendar}
                            </Swiper>
                        </div>
                        <div className="own-swiper own-swiper_months">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            currentSlides[0][0],
                                            e.activeIndex + 1,
                                            currentSlides[0][2]
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            currentSlides[1][2]
                                        ]
                                    ])
                                }
                                id="months-1"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[0][1] - 1}
                            >
                                {monthsOfCalendar}
                            </Swiper>
                        </div>
                        <div className="own-swiper own-swiper_years">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            currentSlides[0][0],
                                            currentSlides[0][1],
                                            e.activeIndex + 1900
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            currentSlides[1][2]
                                        ]
                                    ])
                                }
                                id="years-1"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[0][2] - 1900}
                            >
                                {yearsOfCalendar}
                            </Swiper>
                        </div>
                    </div>
                    <div className="choice-time__btns">
                        <button
                            onClick={() => changeOneOfDates(currentSlides[0])}
                        >
                            ОK
                        </button>
                        <button
                            onClick={() =>
                                toggleCloseOrOpenModalWindow("close")
                            }
                        >
                            Отмена
                        </button>
                    </div>
                </div>
                <div
                    className="choice-time__overlay"
                    onClick={() => toggleCloseOrOpenModalWindow("close")}
                ></div>
            </div>
            <div className={classOfModalSecond}>
                <div className="choice-time__body">
                    <h2 className="choice-time__title">
                        {activeField === 1 ? "День рождения" : "Сегодня"}
                    </h2>
                    <div className="choice-time__items">
                        <div className="own-swiper own-swiper_days">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            e.activeIndex + 1,
                                            currentSlides[0][1],
                                            currentSlides[0][2]
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            currentSlides[1][2]
                                        ]
                                    ])
                                }
                                id="days-2"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[1][0] - 1}
                            >
                                {daysOfCalendar}
                            </Swiper>
                        </div>
                        <div className="own-swiper own-swiper_months">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            currentSlides[0][0],
                                            e.activeIndex + 1,
                                            currentSlides[0][2]
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            currentSlides[1][2]
                                        ]
                                    ])
                                }
                                id="months-2"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[1][1] - 1}
                            >
                                {monthsOfCalendar}
                            </Swiper>
                        </div>
                        <div className="own-swiper own-swiper_years">
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides([
                                        [
                                            currentSlides[0][0],
                                            currentSlides[0][1],
                                            currentSlides[0][2]
                                        ],
                                        [
                                            currentSlides[1][0],
                                            currentSlides[1][1],
                                            e.activeIndex + 1900
                                        ]
                                    ])
                                }
                                id="years-2"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide[1][2] - 1900}
                            >
                                {yearsOfCalendar}
                            </Swiper>
                        </div>
                    </div>
                    <div className="choice-time__btns">
                        <button
                            onClick={() => changeOneOfDates(currentSlides[1])}
                        >
                            ОK
                        </button>
                        <button
                            onClick={() =>
                                toggleCloseOrOpenModalWindow("close")
                            }
                        >
                            Отмена
                        </button>
                    </div>
                </div>
                <div
                    className="choice-time__overlay"
                    onClick={() => toggleCloseOrOpenModalWindow("close")}
                ></div>
            </div>
        </>
    );
};

ChoiceOfTime.propTypes = {
    openOrCloseModalWindow: PropTypes.array,
    toggleCloseOrOpenModalWindow: PropTypes.func,
    changeOneOfDates: PropTypes.func,
    datesSimple: PropTypes.array,
    activeField: PropTypes.number,
    activeSlide: PropTypes.array
};

export default ChoiceOfTime;
