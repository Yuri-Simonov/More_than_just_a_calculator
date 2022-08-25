import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";

const OwnSwiper = () => {
    const slides = [];

    for (let i = 0; i < 5; i++) {
        slides.push(<SwiperSlide key={`slide-${i}`}>{i}</SwiperSlide>);
    }

    return (
        <>
            <Swiper id="birthday">{slides}</Swiper>
        </>
    );
};

export default OwnSwiper;
