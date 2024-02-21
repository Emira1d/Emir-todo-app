import React from 'react'
import Button from '../Button'
import './Todo.css'
import { useState } from 'react'

const ToDo = React.memo(({ todoObj, setTodos, status }) => {
    const [isSafe, setIsSafe] = useState()
    const doneHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isActive: !el.isActive } : el))
    }
    const deleteOrRestoreHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isDeleted: !el.isDeleted } : el))
    }
    const deleteHandler = () => {
        setTodos((prev) => prev.filter((el) => el.id !== todoObj.id))
    }
    const editHandler = () => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, isEditing: !el.isEditing } : el))
    }
    const inputChangeHandler = (e) => {
        setTodos((prev) => prev.map((el) => el.id === todoObj.id ? { ...el, todoText: e.target.value } : el))

    }
    return (
        <div className='divTD'>
            <li className='liTD'>
                <input
                    type='text'
                    className={`todo-text active ${todoObj.isActive ? '' : 'done'}`}
                    value={todoObj.todoText}
                    readOnly={!todoObj.isEditing}
                    onChange={inputChangeHandler}
                    id='inputToDo'
                />
                {
                    status !== 'trash' ?
                        <div>
                            <Button onClick={doneHandler}>Done</Button>
                            {
                                todoObj.isActive && !todoObj.isDeleted &&
                                <Button onClick={editHandler} isSafe={isSafe} setIsSafe={setIsSafe}>{todoObj.isEditing ? 'save' : 'edit'}</Button>
                            }
                            <Button onClick={deleteOrRestoreHandler}>Delete</Button>
                        </div>
                        :
                        <div>
                            <Button onClick={deleteOrRestoreHandler}>Restore</Button>
                            <Button onClick={deleteHandler}>Delete</Button>
                        </div>
                }
            </li>
        </div>
    )
})

export default ToDo