import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DataStore from './Store'

const EditStudent = () => {
    const ContextData=useContext(DataStore)
    const navigate=useNavigate()
    const IndexValue=useLocation().state.data
    console.log(IndexValue)
    const updateObj={
        Name:ContextData.stuName[IndexValue].Name,
        Age:ContextData.stuName[IndexValue].Age,
        Course:ContextData.stuName[IndexValue].Course,
        Batch:ContextData.stuName[IndexValue].Batch,
    }
    const handelChange=(e)=>{
       updateObj[e.target.name]=e.target.value
    }
    const handelClick=()=>{
        ContextData.stuName[IndexValue]=updateObj;
        navigate('/students')
    }
  return (
    <div>
        
     <>
    <form>
      <div className='addstudent-container'>
      <input type='text' placeholder={ContextData.stuName[IndexValue].Name} id='name' name='Name' onChange={handelChange} />
      <input type='number' placeholder={ContextData.stuName[IndexValue].Age} id='age' name='Age' onChange={handelChange} />
      <input type='text' placeholder={ContextData.stuName[IndexValue].Course} id='course' name='Course' onChange={handelChange} />
      <input type='text' placeholder={ContextData.stuName[IndexValue].Batch} id='batch' name='Batch' onChange={handelChange} />
      </div>
      <div className='btn-container'>
      <button type='button'onClick={handelClick} className='btn2'>Update</button>
      <button type='button'onClick={()=>{ navigate('/students')}} className='btn2 btn3'>Cancel</button>
      </div>
    </form>  
    </>
    </div>
  )
}

export default EditStudent
