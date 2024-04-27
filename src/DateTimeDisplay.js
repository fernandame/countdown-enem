const cx = require('classnames');

const DateTimeDisplay = ({ value, type, darkMode }) => {
  return (
    <div className={cx('flex flex-col items-center text-center', darkMode && "text-white")}>
        <span className='text-[8rem] -mt-7'>
            {value}
        </span>
        <span className='-mt-10 text-2xl text-primary'>
            {type}
        </span>
    </div>
  );
};

export default DateTimeDisplay;