import React from 'react'
import './AddForm.css'

const AddForm = ({setTodos, setTodoText, todoText}) => {
    const submitHandler = (e) => {
        e.preventDefault()
        setTodos((prev) => [...prev, {
            id: prev.length !== 0 && prev.at(-1).id ? prev.at(-1).id + 1 : 1,
            todoText: todoText,
            isActive: true,
            isDeleted: false,
            isEditing: false
        }])
        setTodoText('')
    }
    const todoTextInputChange = (e) => {
        setTodoText(e.target.value)
    }
    return (
        <form onSubmit={submitHandler} className='addForm'>
            <input type="text" onChange={todoTextInputChange} value={todoText} className='add'/>
            <button type="submit" className='btnAD'>Add</button>
        </form>
    )
}

export default AddForm