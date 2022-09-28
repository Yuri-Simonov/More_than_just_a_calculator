import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel } from "swiper";
import { months, years } from "../../../consts/durations";

const ChoiceOfDuration = ({
    toggleDurationModal,
    activeSlide,
    changeActiveSlide
}) => {
    const [currentSlides, setCurrentSlides] = useState(activeSlide);

    const visibleOrHiddenModal =
        "choice-duration " +
        (toggleDurationModal ? "choice-duration_active" : "");

    const monthsOfDuration = months.map((num) => {
        return (
            <SwiperSlide key={`slide-${num}`}>
                <div className="choice-duration__item">{num}</div>
            </SwiperSlide>
        );
    });

    const yearsOfDuration = years.map((num) => {
        return (
            <SwiperSlide key={`slide-${num}`}>
                <div className="choice-duration__item">{num}</div>
            </SwiperSlide>
        );
    });

    return (
        <>
            <div className={visibleOrHiddenModal}>
                <div className="choice-duration__body">
                    <div className="choice-duration__items">
                        <div className="own-swiper own-swiper_years">
                            <h2 className="choice-duration__title">Года</h2>
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides({
                                        ...currentSlides,
                                        years: e.activeIndex + 1
                                    })
                                }
                                id="years-1"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide.years - 1}
                            >
                                {yearsOfDuration}
                            </Swiper>
                        </div>
                        <div className="own-swiper own-swiper_months">
                            <h2 className="choice-duration__title">Месяцы</h2>
                            <Swiper
                                onSlideChange={(e) =>
                                    setCurrentSlides({
                                        ...currentSlides,
                                        months: e.activeIndex
                                    })
                                }
                                id="months-1"
                                slidesPerView={3}
                                spaceBetween={30}
                                centeredSlides={true}
                                grabCursor={true}
                                mousewheel={true}
                                modules={[Mousewheel]}
                                initialSlide={activeSlide.months}
                            >
                                {monthsOfDuration}
                            </Swiper>
                        </div>
                    </div>
                    <div className="choice-duration__btns">
                        <button
                            onClick={() => changeActiveSlide(currentSlides)}
                        >
                            ОK
                        </button>
                        <button onClick={toggleDurationModal}>Отмена</button>
                    </div>
                </div>
                <div
                    className="choice-duration__overlay"
                    onClick={toggleDurationModal}
                ></div>
            </div>
        </>
    );
};

ChoiceOfDuration.propTypes = {
    toggleDurationModal: PropTypes.func,
    activeSlide: PropTypes.object,
    changeActiveSlide: PropTypes.func
};

export default ChoiceOfDuration;
