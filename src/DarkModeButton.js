import React from 'react'
import Moon from './icons/moon.svg'
import Sun from './icons/sun.svg'
const cx = require('classnames');

const DarkModeButton = ({onClick, darkMode}) => {
  return (
    <button className={cx('absolute left-2 top-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer', darkMode ? "hover:bg-white/10" : "hover:bg-gray-200")} onClick={onClick}>
        {darkMode
            ? <img src={Sun} alt="Modo Claro" className='p-0.5'/>
            : <img src={Moon} alt="Modo Noturno" />
        } 
    </button>
  )
}

export default DarkModeButton