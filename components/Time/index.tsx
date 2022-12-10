import style from './Time.module.css'
import React, { useCallback, useEffect, useState } from 'react';

// TODO: try this: https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_clock_start

export function Time() {
  const [time, setTime] = useState({ time: '', meridiem: '' });

  const setTimeCallback = useCallback((date: Date) => {
    let hour = date.getHours();
    const min = date.getMinutes();
    let meridiem = 'am';

    if (hour > 12) {
      hour -= 12;
      meridiem = 'pm';
    }
    if (hour == 12) {
      meridiem = 'pm';
    }
    if (hour == 0) {
      hour = 12;
      meridiem = 'am';
    }

    const hourStr = `${hour < 10 ? '0' : ''}${hour}`;
    const minStr = `${min < 10 ? '0' : ''}${min}`;

    setTime({ time: `${hourStr}:${minStr}`, meridiem });
  }, [setTime]);

  const updateTime = () => {
    const date = new Date();
    const secondsLeft = 60 - date.getSeconds();

    setTimeCallback(date);

    setTimeout(updateTime, secondsLeft * 1000 + 100);
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div className={style.clock}>
      <span className={style.time}>{time.time}</span>
      <span className={style.meridiem}>{' '}{time.meridiem}</span>
    </div>
  );
}