import React from 'react';

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <div className='border border-red-700 rounded-md px-5 py-4 font-bold text-7xl brightness-200'>
            {value}
        </div>
        <p className='text-2xl uppercase font-bold text-red-700 brightness-200'>
            {type}
        </p>
    </div>
  );
};

export default DateTimeDisplay;