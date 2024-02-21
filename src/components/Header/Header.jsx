import React from 'react'
import './Header.css'

const Header = ({todos}) => {
    const activeTodos = todos.filter(el => el.isActive && !el.isDeleted).length
    const doneTodos = todos.filter(el => !el.isActive && !el.isDeleted).length
  return (
    <div>
        <h1 className='title'>To Do List</h1>
        <div className='counter'>
          <span>{activeTodos} more, </span>
          <span>{doneTodos} done</span>
        </div>
    </div>
  )
}

export default Header