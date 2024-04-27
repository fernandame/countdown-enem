import { useState } from 'react'
import { useCountdown } from './useCountdown'
import DateTimeDisplay from './DateTimeDisplay'
import DarkModeButton from './DarkModeButton'
const cx = require('classnames')

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
  const [darkMode, setDarkMode] = useState(false)

    return (
      <div className={cx("flex h-screen w-full justify-center items-center", darkMode ? "bg-dark-mode" : "bg-white")}>
        <div className='flex flex-col w-[230px] h-[445px] items-center justify-evenly'>
          <DarkModeButton
            onClick={() => setDarkMode(!darkMode)}
            darkMode={darkMode} />
          <DateTimeDisplay value={weeks} type={'Semanas'} darkMode={darkMode} />
          <div className='divider div-transparent' />
          <DateTimeDisplay value={days} type={'Dias'} darkMode={darkMode}  />
        </div>
      </div>
    );
  };

  export default CountdownTimer