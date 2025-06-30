import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, Blog, Dashboard, ListBlog, AddBlog, Layout,Comments} from './pages/index'
import {Login} from './components/index'
import 'quill/dist/quill.snow.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/admin' element={ true ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path='/admin/list-blog' element={<ListBlog/>} /> 
          <Route path='/admin/comments' element={<Comments/>} /> 
          <Route path='/admin/add-blog' element={<AddBlog/>} /> 

        </Route>
      </Routes>
    </div>
  )
}

export default App