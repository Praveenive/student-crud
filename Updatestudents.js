import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base'

function Updatestudents({student,setStudent,editIdx,setEditIdx}) {
  const history =useHistory()
  const editStudent = student[editIdx]
  const [name,setName]=useState("")
  const [batch,setBatch]=useState("")
  const [gender,setGender]=useState("")
  const [qualification,setQualification]=useState("")
  
  // useEffect(()=>{
  //      setName(editStudent.name)
  //      setBatch(editStudent.batch)
  //      setGender(editStudent.gender)
  //      setQualification(editStudent.qualification)
  // },[editStudent])

  function needupdate(editIdx) {
    const updateobj = { name, batch, qualification, gender }
    student[editIdx] = updateobj;
    setStudent([...student])
    console.log(editIdx)
    history.push("/students")
  }
  return (
    <Base
    title={"Welcome to Edit Section "}
    about ={"To Fill these and Update Your data "    }
    >
   <div className='input-list'>
      <TextField id="filled-basic" label="Name" variant="filled" onChange={(e)=>setName(e.target.value)} value={name} />
      <TextField id="filled-basic" label="Batch" variant="filled" onChange={(e)=>setBatch(e.target.value)} value={batch}/>
      <TextField id="filled-basic" label="Gender" variant="filled" onChange={(e)=>setGender(e.target.value)} value={gender}/>
      <TextField id="filled-basic" label="Qualification" variant="filled" onChange={(e)=>setQualification(e.target.value)} value={qualification}/>
      </div><br/>
      <Button variant="contained" onClick={()=>needupdate(editIdx)}>Update Students</Button>
     


    </Base>
  )
}

export default Updatestudents