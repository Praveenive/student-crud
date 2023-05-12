import { Button } from '@mui/material'
import React from 'react'
import BalanceIcon from '@mui/icons-material/Balance';
import { useHistory } from 'react-router-dom';

function Base({title,about,children}) {
  const history =useHistory()
  return (
    <div >
        <div className='main-component'>
          <div className='first'>
        <BalanceIcon/>
        <Button variant="contained" onClick={()=>history.push("/")}>Dashboard</Button>
        <Button variant="contained" onClick={()=>history.push("/students")}>Student List</Button>
        <Button variant="contained" onClick={()=>history.push("/add")} >Add Students</Button></div>
       <div> <Button   variant="contained">Log Out</Button>
       </div></div>
        <div className='main'>
        <h1>{title}</h1>
        <h4>{about}</h4>
        
        
            {children}
        </div>
       

    </div>
  )
}

export default Base