import React from 'react';
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({ targetDate }) => {
  const [weeks, days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
      <ShowCounter
        weeks={weeks}
        days={days}
        // hours={hours}
        // minutes={minutes}
        // seconds={seconds}
      />
    );
};

const ShowCounter = ({ weeks, days, hours, minutes, seconds }) => {
    return (
      <div className="flex flex-col h-screen w-full justify-center gap-10">
          <DateTimeDisplay value={weeks} type={'Semanas'} />
          <DateTimeDisplay value={days} type={'Dias'} />
          {/* <DateTimeDisplay value={hours} type={'Horas'} />
          <DateTimeDisplay value={minutes} type={'Minutos'} />
          <DateTimeDisplay value={seconds} type={'Segundos'}/> */}
      </div>
    );
  };

  export default CountdownTimer