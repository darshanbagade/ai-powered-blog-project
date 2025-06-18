import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, Blog} from './pages/index'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default App