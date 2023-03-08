import { IDateSpecific } from './interfaces';

export function getDateTimeSpecific(dateTime: Date): IDateSpecific {
    const monthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.',
        'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.',
    ];
    let dateDay = dateTime.getDate().toString();
    dateDay = (`0${dateDay}`).slice(-2);
    let dateMonth = (dateTime.getMonth() + 1).toString();
    dateMonth = (`0${dateMonth}`).slice(-2);
    const dateYear = dateTime.getFullYear().toString();

    let timeHour = dateTime.getHours().toString();
    timeHour = (`0${timeHour}`).slice(-2);
    let timeMinute = dateTime.getMinutes().toString();
    timeMinute = (`0${timeMinute}`).slice(-2);
    let timeSecond = dateTime.getSeconds().toString();
    timeSecond = (`0${timeSecond}`).slice(-2);

    const timeCount = Math.abs((dateTime.getTime()));

    const dataMonthNumber = dateTime.getMonth() + 1;
    const monthName = monthNames[dataMonthNumber - 1];
    const formattedDate = `${dateDay}-${monthName}-${dateYear}`;
    const time = `${timeHour}:${timeMinute}`;
    return { dateDay, dateMonth, dateYear, timeHour, timeMinute, timeSecond, timeCount, monthName, formattedDate, time };
}
