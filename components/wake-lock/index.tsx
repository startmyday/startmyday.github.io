import style from './WakeLock.module.css'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}

export function WakeLock() {
  const wakeLock = useRef(null);

  const [isLocked, setLocked] = useState(false);
  const setLockedCallback = useCallback((isLocked: boolean) => setLocked(isLocked), [setLocked]);

  const requestWakeLock = async () => {
    try {
      if (!navigator?.wakeLock) {
        return;
      }
      let wakeLock = await navigator.wakeLock.request('screen');
      setLockedCallback(true);

      wakeLock.addEventListener('release', () => {
        setLockedCallback(false);
      });

      document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
          wakeLock = await navigator.wakeLock.request('screen');
          setLockedCallback(true);
        }
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(`${err.name}, ${err.message}`);
    }
  };

  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      // requestWakeLock();
    } else {
      // releaseWakeLock();
    }
  };

  useEffect(() => {
    requestWakeLock();
  }, [wakeLock]);

  return (
    <div className={style.wakelock}>
      <label className={style.switch}>
        <input type="checkbox" checked={isLocked} onChange={onChange} className={style.input} />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}