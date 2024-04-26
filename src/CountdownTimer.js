import React from 'react';
import { useCountdown } from './useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

const CountdownTimer = ({ targetDate }) => {
  const [weeks, days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
      <ShowCounter
        weeks={weeks}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
};

const ShowCounter = ({ weeks, days, hours, minutes, seconds }) => {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <div className='flex flex-col w-[230px] h-[400px] items-center justify-evenly bg-white shadow-lg border rounded-3xl'>
          <DateTimeDisplay value={weeks} type={'Semanas'} />
          <div className='divider div-transparent' />
          <DateTimeDisplay value={days} type={'Dias'} />
          {/* <DateTimeDisplay value={hours} type={'Horas'} /> */}
          {/* <DateTimeDisplay value={minutes} type={'Minutos'} /> */}
          {/* <DateTimeDisplay value={seconds} type={'Segundos'}/> */}
        </div>
      </div>
    );
  };

  export default CountdownTimer