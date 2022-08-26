import { useState, useEffect } from "react";
import { days } from "../consts/dayOfWeeks";
import { timeOptions } from "../consts/time_options";

export const useTime = (initialState) => {
    // Состояние с текущими датами в миллисекундах
    const [dates, setDates] = useState(initialState);
    // Состояние с текущими датами в формате "24 авг. 2020"
    const [datesSimple, setDatesSimple] = useState([]);
    // Состояние с текущим возвраcтом в привычном его представлении
    const [age, setAge] = useState({
        years: 0,
        months: 0,
        days: 0
    });
    // Состояние для подсчета всех временных показателей как отдельное целое
    const [ageStatistics, setAgeStatistics] = useState({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0
    });

    // Состояние для следующего дня рождения
    const [nextBirthday, setNextBirthday] = useState({
        dayOfWeek: "",
        leftMonths: 0,
        leftDays: 0
    });

    // Вычисление данных при загрузке страницы
    useEffect(() => {
        changeAgeStatistics();
        caclNextBirthday();
        caclNextBirthday();
    }, []);

    // Функция для изменения текущих дат
    const changeDates = (date) => {
        setDates(date);
    };

    // Функция для изменения текущего возраста
    const changeAge = () => {
        const diff = dates[1].getTime() - dates[0].getTime();
        const years = Math.floor(diff / 3.154e10);
        const months = Math.floor((diff - years * 3.154e10) / 2.628e9);
        const days = Math.floor(
            (diff - years * 3.154e10 - months * 2.628e9) / 8.64e7
        );
        setAge({
            years,
            months,
            days
        });
    };

    // Функция для изменения текущей статистики
    function changeAgeStatistics() {
        const diff = dates[1].getTime() - dates[0].getTime();
        const years = Math.floor(diff / 3.154e10);
        const months = Math.floor(diff / 2.628e9);
        const weeks = Math.floor(diff / 6.048e8);
        const days = Math.floor(diff / 8.64e7);
        const hours = Math.floor(diff / 3.6e6);
        const minutes = Math.floor(diff / 6e4);
        setAgeStatistics({
            years,
            months,
            weeks,
            days,
            hours,
            minutes
        });
    }

    // Преобразование даты в привычный для чтения/восприятия формат
    useEffect(() => {
        const firstDate = dates[0]
            ?.toLocaleString("ru-RU", timeOptions)
            .slice(0, 12);
        const secondDate = dates[1]
            ?.toLocaleString("ru-RU", timeOptions)
            .slice(0, 12);
        setDatesSimple([firstDate, secondDate]);
    }, [dates]);

    // Вычисление следующего дня рождения
    function caclNextBirthday() {
        const diffYearsOfDates = Math.floor(
            (dates[1].getTime() - dates[0].getTime()) / 3.154e10
        );
        const getDateDay = dates[0].getDate();
        const getDateMonth = dates[0].getMonth();
        const getDateYear = dates[0].getFullYear();
        const someNewDate = new Date(
            getDateYear + Number(diffYearsOfDates) + 1,
            getDateMonth,
            getDateDay,
            11,
            59
        );
        const nextBirthday = someNewDate.getTime() - dates[1].getTime();
        const nextBirthdayDayOfWeek = days[someNewDate.getDay()];
        const leftMonths = Math.floor(nextBirthday / 2.628e9);
        const leftDays = Math.floor(
            (nextBirthday - leftMonths * 2.628e9) / 8.64e7
        );
        setNextBirthday({
            dayOfWeek: nextBirthdayDayOfWeek,
            leftMonths,
            leftDays
        });
    }

    return {
        dates,
        changeDates,
        age,
        changeAge,
        ageStatistics,
        changeAgeStatistics,
        datesSimple,
        nextBirthday
    };
};
