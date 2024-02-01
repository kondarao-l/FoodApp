import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Homepage'
import Dashboard from './Dashboard'
import Brouncheri from './Restaurents/Brouncheri'

function MainFile() {
  return (
    <div>
     <BrowserRouter>
        <center>

        </center>

        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/brouncheri' element = {<Brouncheri/>}></Route>
        </Routes>
      </BrowserRouter>
        </div>
  )
}

export default MainFile