import React from 'react'
import Button from '../Button'
import './StatusBar.css'

const StatusBar = ({setStatus, status, searchText, setSearchText}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  const searchHandler = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <div className='SBInput'>
      <div className='buttons'>
        <Button value='all' onClick={statusHandler} activeBtn={status === 'all' && true} class='btn'>All</Button>
        <Button value='active' onClick={statusHandler} activeBtn={status === 'active' && true} >Active</Button>
        <Button value='done' onClick={statusHandler} activeBtn={status === 'done' && true} >Done</Button>
      </div>
      <input type="text" placeholder="search" value={searchText} onChange={searchHandler} className='inputSB'/>
    </div>
  )
}

export default StatusBar