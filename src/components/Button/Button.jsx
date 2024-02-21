import React from 'react'
import './Button.css'

const Button = ({children, onClick, value = '', activeBtn = false}) => {
  return (
    <button type='button' onClick={onClick} value={value} style={{background: activeBtn ? '#ff9966' : 'rgba(255, 255, 255, 0.761)'}} className='btn'>{children}</button>
  )
}

export default Button