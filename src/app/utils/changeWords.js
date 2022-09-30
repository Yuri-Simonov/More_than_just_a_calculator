const seconds = ["секунда", "секунды", "секунд"]; // 1, 2, 10
const minutes = ["минута", "минуты", "минут"];
const hours = ["час", "часа", "часов"];
const days = ["день", "дня", "дней"];
const weeks = ["неделя", "недели", "недель"];
const months = ["месяц", "месяца", "месяцев"];
const years = ["год", "года", "лет"];

const findWord = (word) => {
    switch (word) {
        case "second":
            return seconds;
        case "minute":
            return minutes;
        case "hour":
            return hours;
        case "day":
            return days;
        case "week":
            return weeks;
        case "month":
            return months;
        case "year":
            return years;

        default:
            break;
    }
};

const changeWords = (num, word) => {
    const currentWord = findWord(word);

    const n = Math.abs(num) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
        return currentWord[2];
    }
    if (n1 > 1 && n1 < 5) {
        return currentWord[1];
    }
    if (n1 === 1) {
        return currentWord[0];
    }
    return currentWord[2];
};

export default changeWords;
