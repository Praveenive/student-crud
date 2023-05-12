import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Base from '../Base'
import { useHistory } from 'react-router-dom';

function Addstudents({student,setStudent}) {
  const history =useHistory( )
  const [name,setName]=useState("")
  const [batch,setBatch]=useState("")
  const [gender,setGender]=useState("")
  const [qualification,setQualification]=useState("")
 
const createstudent=()=>
{
  const newperson = {
    name,batch,qualification,gender
  }
  setStudent([...student,newperson])
  history.push("/students")
}
 

  return (
    <Base 
    title={"WELCOME TO OUR ACADEMY"}
    about={"Please fill these Form"}
    >
    <>
      <div className='input-list'>
      <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setName(e.target.value)} value={name} />
      <TextField id="filled-basic" label="Batch" variant="filled" onChange={(e)=>setBatch(e.target.value)} value={batch}/>
      <TextField id="filled-basic" label="Gender" variant="filled" onChange={(e)=>setGender(e.target.value)} value={gender}/>
      <TextField id="filled-basic" label="Qualification" variant="filled" onChange={(e)=>setQualification(e.target.value)} value={qualification}/>
      </div><br/>
      <Button variant="contained" onClick={createstudent}>Add Students</Button>
     </>
    
    
     </Base>
  )
}

export default Addstudents