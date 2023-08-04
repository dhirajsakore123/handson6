import React, { useContext } from 'react'
import DataStore from './Store'
import { Link, useNavigate } from 'react-router-dom'

const Students = () => {
    const navigate=useNavigate()
    const Data=useContext(DataStore)
    
  return (

    <div>
    <h1>Students Details</h1>
    <button className='btn1' onClick={()=>navigate('/addnewstudent')}>Add new student</button>
    <div className='table-container'>
    <table className='table'>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
        </tr>
        {
          Data.stuName.map((item,index)=>{
            return(
               <>
                <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                   <Link to='/editstudent' state={{data:`${index}`}}><td>Edit</td></Link> 
                  
                </tr>
                </>
            )
          })
        }
    </table>
    </div>
    </div>
   
    
  )
}

export default Students
