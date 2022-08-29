import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import PropTypes from "prop-types";
import { days, months, years } from "../../../consts/calendar";

const ChoiceOfTime = ({ openOrCloseModalWindow }) => {
    const classOfModal =
        "choice-time" + (openOrCloseModalWindow ? "choice-time_active" : "");

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
        <div className={classOfModal}>
            <div className="choice-time__body">
                <div className="choice-time__items">
                    <div className="own-swiper own-swiper_days">
                        <Swiper
                            id="days"
                            slidesPerView={3}
                            spaceBetween={30}
                            centeredSlides={true}
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
                        >
                            {yearsOfCalendar}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

ChoiceOfTime.propTypes = {
    openOrCloseModalWindow: PropTypes.bool
};

export default ChoiceOfTime;
