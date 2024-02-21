import React from 'react'
import Button from "../Button";
import './Trash.css'

const BasketList = ({setStatus, status}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
      <div className='trash'>
        <Button value='trash' onClick={statusHandler} activeBtn={status === 'trash' && true}>Trash</Button>
      </div>
  )
}

export default BasketList