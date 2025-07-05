import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, Blog, Dashboard, ListBlog, AddBlog, Layout,Comments} from './pages/index'
import {Login} from './components/index'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

function App() {
const {token} = useAppContext()

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/admin' element={ token ? <Layout/> : <Login/>}>
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