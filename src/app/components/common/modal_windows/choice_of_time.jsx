import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
// import PropTypes from "prop-types";

const ChoiceOfTime = () => {
    // const classOfModal =
    //     "choice-time" + (openOrCloseModal ? "choice-time_active" : "");

    const slides = [];

    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide direction={"vertical"} key={`slide-${i}`}>
                <div className="choice-time__item">{i}</div>
            </SwiperSlide>
        );
    }

    return (
        <div className="choice-time choice-time_active">
            <div className="choice-time__body">
                <div className="choice-time__items">
                    <div className="own-swiper">
                        <Swiper id="birthday" direction={"vertical"}>
                            {slides}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ChoiceOfTime.propTypes = {};

export default ChoiceOfTime;
