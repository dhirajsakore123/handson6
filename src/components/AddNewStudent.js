import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataStore from './Store'

const AddNewStudent = () => {
  const [isMobile,setIsMobile]=useState(false)
  const [isMobile1,setIsMobile1]=useState(false)
  const [isMobile2,setIsMobile2]=useState(false)
  const [isMobile3,setIsMobile3]=useState(false)
  const ContextData=useContext(DataStore)
const navigate=useNavigate()
    const newStu={
        Name:'',
        Age:'',
        Course:'',
        Batch:'',
    }

    const handelChange=(e)=>{
        newStu[e.target.name]=e.target.value
    }
    const handelClick=()=>{
     ContextData.stuName.push(newStu)
        navigate('/students')
    }
  return (
    <>
    <form>
      <div className='addstudent-container'>
        <div className='input-element'>
        <input type='text'  id='name' name='Name' onChange={handelChange} onClick={()=>{setIsMobile(true)}}/>
          <span className={isMobile?'spanelement1':'spanelement'}>Name</span>
      </div>
      <div className='input-element'>
      <input type='number'  id='age' name='Age' onChange={handelChange}onClick={()=>{setIsMobile1(true)}} />
      <span className={isMobile1?'spanelement1':'spanelement'}>Age</span>
      </div>
      <div className='input-element'>
      <input type='text'  id='course' name='Course' onChange={handelChange} onClick={()=>{setIsMobile2(true)}}/>
      <span className={isMobile2?'spanelement1':'spanelement'}>Course</span>
      </div>
      <div className='input-element'>
      <input type='text' id='batch' name='Batch' onChange={handelChange}onClick={()=>{setIsMobile3(true)}} />
      <span className={isMobile3?'spanelement1':'spanelement'}>Batch</span>
      </div>
      
      </div>
      <div className='btn-container'>
      <button type='button'onClick={handelClick} className='btn2'>Submit</button>
      <button type='button'onClick={()=>{ navigate('/students')}} className='btn2 btn3'>Cancel</button>
      </div>
    </form>  
    </>
  )
}

export default AddNewStudent
