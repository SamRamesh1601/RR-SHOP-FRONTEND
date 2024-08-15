import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/home'
import GridView from './page/gridView'

function App() {
  return(
    <Router>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/listview' element={<GridView />}></Route>
    </Routes>
  </Router>
  )
}

export default App
