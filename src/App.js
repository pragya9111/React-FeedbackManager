import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './Component/Navbar/Nav'
import Form from './Component/Form/Form'
import Display  from './Component/Display/Display'

function App() {

    const state= useSelector(state=> state.feedback.feedback)

  return (
    <div className='main'>
        <Nav/>
        <Routes>
            <Route path='/' element={<Form/>}></Route>
            <Route path='/display' element={<Display/>}></Route>
        
        </Routes>
    </div>
  )
}

export default App