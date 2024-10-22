import React from 'react'

const Menu = ({menuName, className}) => {
  return (
    <ul>
      <li className={`font-semibold font-pop text-2xl text-black ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu