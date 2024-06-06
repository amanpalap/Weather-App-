// src/Clock.js
import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return (
        <div className='flex flex-wrap items-center justify-center w-full text-black md:justify-end'>
            <div className='flex flex-wrap items-center justify-center w-1/2 md:w-full'>
                <div className='w-full text-sm font-extrabold text-start md:text-4xl md:text-end'>{hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className='font-medium text-black'>{weekdays[day]}, {date} {months[month]} {year}</div>
        </div>
    );
};

export default Clock;
