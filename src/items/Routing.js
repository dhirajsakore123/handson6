import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Students from '../components/Students'
import Contacts from '../components/Contacts'
import DataStore from '../components/Store'
import AddNewStudent from '../components/AddNewStudent'
import EditStudent from '../components/EditStudent'

const Routing = () => {
    const[studentData,setStudentData]=useState([
        {Name:'john',
        Age:26,
        Course:'MERN',
        Batch:'October',
       
        }
        ,
        {Name:'Doe',
        Age:25,
        Course:'MERN',
        Batch:'November',
       
        },
        {Name:'Biden',
        Age:26,
        Course:'MERN',
        Batch:'September',
        
        }
        ,
        {Name:'Barar',
        Age:22,
        Course:'MERN',
        Batch:'September',
       
        },
        {Name:'Christ',
        Age:23,
        Course:'MERN',
        Batch:'October',
        
        },
        {Name:'Elent',
        Age:24,
        Course:'MERN',
        Batch:'November',
       
        },
        {Name:'Harshita Sharma',
        Age:24,
        Course:'MERN',
        Batch:'October',
        
        }
    ])
  return (
    
    <>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/students' element={
        <DataStore.Provider value={{stuName:studentData,updateStu:setStudentData}}>
            <Students/>
        </DataStore.Provider>
       } />
       <Route path='/addnewstudent' element={
         <DataStore.Provider value={{stuName:studentData,updateStu:setStudentData}}>
         <AddNewStudent/>
        </DataStore.Provider>
       } />
        <Route path='/editstudent' element={
         <DataStore.Provider value={{stuName:studentData,updateStu:setStudentData}}>
         <EditStudent/>
        </DataStore.Provider>
       } />
       <Route path='/contacts' element={<Contacts/>} />
    </Routes> 
    </>
  )
}

export default Routing
