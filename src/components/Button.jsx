import React from 'react'

const Button = ({btnName, className}) => {
  return (
    <button className={`font-semibold font-pop text-2xl text-black ${className}`}>{btnName}</button>
  )
}

export default Button