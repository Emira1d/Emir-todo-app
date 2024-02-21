import React from 'react'
import ToDo from '../ToDo'
import './ToDoList.css'

const ToDoList = ({todos, setTodos, status, searchText}) => {
    let filteredTodos
    if(status === 'active'){
        filteredTodos = todos.filter(el => el.isActive && !el.isDeleted && el.todoText.includes(searchText))
    } else if (status === 'done'){
        filteredTodos = todos.filter(el => !el.isActive && !el.isDeleted && el.todoText.includes(searchText))
    } else if (status === 'trash'){
        filteredTodos = todos.filter(el => el.isDeleted && el.todoText.includes(searchText))
    } else {
        filteredTodos = todos.filter(el => !el.isDeleted && el.todoText.includes(searchText))
    }
  return (
    <ul className='ulTD'>
        {filteredTodos.map(todo => (
            <ToDo todoObj={todo} key={todo.id} setTodos={setTodos} status={status}/>
        ))}

    </ul>
  )
}

export default ToDoList