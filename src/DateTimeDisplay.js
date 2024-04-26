const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className='flex flex-col items-center text-center'>
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