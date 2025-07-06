import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {assets} from '../../assets/assets'
import { Sidebar } from '../../components/index'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'
function Layout() {

    const {setToken , axios} = useAppContext()
    const navigate = useNavigate()
        const logout = () => {
          // Remove token from localStorage
          localStorage.removeItem('token');
          
          // Set token state to null
          setToken(null);
          
          // Remove authorization header from axios
          delete axios.defaults.headers.common['Authorization'];
          
          // Navigate to login page
          navigate('/');
          
          // Show success message
          toast.success("Logged out successfully");
      }
    
  return (
    <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <img 
            src={assets.logo} 
            className='w-32 sm:w-40 cursor-pointer' 
            onClick={()=>navigate('/')}
            />
            <div className='flex justify-between '>
              <button onClick={()=>navigate('/')}
               className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer mx-2'
              >Home</button>
              <button onClick={()=>logout()}
               className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
              >Logout</button>
            </div>
        </div>



        <div className='flex h-[calc(100vh-70px)]'>
          <Sidebar/>
          <Outlet/>
        </div>

    </>
  )
}

export default Layout