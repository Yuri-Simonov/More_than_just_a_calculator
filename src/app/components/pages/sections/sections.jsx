import React from "react";
import { Link } from "react-router-dom";
import dataLogo from "../../../images/svg/data.svg";
import bodyWeightMeterLogo from "../../../images/svg/body_weight_meter.svg";
import ageLogo from "../../../images/svg/age.svg";
import dateLogo from "../../../images/svg/date.svg";
import discountLogo from "../../../images/svg/discount.svg";
import lengthLogo from "../../../images/svg/length.svg";
import scaleOfNotationLogo from "../../../images/svg/scale_of_notation.svg";
import speedLogo from "../../../images/svg/speed.svg";
import squareLogo from "../../../images/svg/square.svg";
import temperatureLogo from "../../../images/svg/temperature.svg";
import timeLogo from "../../../images/svg/time.svg";
import volumeLogo from "../../../images/svg/volume.svg";
import weightLogo from "../../../images/svg/weight.svg";

const Sections = () => {
    const allSections = [
        {
            logo: dataLogo,
            link: "digital_data",
            alt: "digital_data",
            title: "Данные"
        },
        {
            logo: bodyWeightMeterLogo,
            link: "body_weight_meter",
            alt: "body_weight_meter",
            title: "ИМТ"
        },
        {
            logo: ageLogo,
            link: "body_weight_meter",
            alt: "body_weight_meter",
            title: "Возраст"
        },
        {
            logo: discountLogo,
            link: "discount",
            alt: "discount",
            title: "Скидка"
        },
        { logo: dateLogo, link: "date", alt: "date", title: "Дата" },
        { logo: lengthLogo, link: "length", alt: "length", title: "Длина" },
        { logo: squareLogo, link: "square", alt: "square", title: "Площадь" },
        { logo: volumeLogo, link: "volume", alt: "volume", title: "Объем" },
        {
            logo: temperatureLogo,
            link: "temperature",
            alt: "temperature",
            title: "Температура"
        },
        { logo: speedLogo, link: "speed", alt: "speed", title: "Скорость" },
        { logo: timeLogo, link: "time", alt: "time", title: "Время" },
        { logo: weightLogo, link: "weight", alt: "weight", title: "Масса" },
        {
            logo: scaleOfNotationLogo,
            link: "scale_of_notation",
            alt: "scale_of_notation",
            title: "Система счисления"
        }
    ];

    return (
        <section className="sections">
            <div className="container-inner">
                <div className="sections__flex">
                    {allSections.map((section, i) => {
                        return (
                            <div key={i} className="sections__item">
                                <Link to={`/sections/${section.link}`}>
                                    <article className="sections__item-wrapper">
                                        <div className="sections__item-logo">
                                            <img
                                                src={section.logo}
                                                alt={`${section.alt}`}
                                            />
                                        </div>
                                        <h1 className="sections__item-title">
                                            {section.title}
                                        </h1>
                                    </article>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Sections;
