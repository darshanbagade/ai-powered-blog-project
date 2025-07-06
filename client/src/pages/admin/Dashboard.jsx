import React, { useEffect,useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTable from '../../components/admin/BlogTable'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

function Dashboard() {

const [dashboardData,setDashboardData] = useState({
  blogs:0,
  comments:0,
  drafts:0,
  recentBlogs:[]
})
   const {axios} = useAppContext() 
  const fetchBlogs = async()=>{
    try{
      const {data} = await axios.get('/api/admin/dashboard');
      
      // console.log(data.dashboard);
      // if(data.success){
        setDashboardData(data.dashboard)
      // } 
    }catch(error){
      toast.error(error.message)
    }
  }



  useEffect(()=>{
    fetchBlogs();
  },[fetchBlogs])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1}  />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2}  />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3}  />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4}/>
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            
            <tbody>
              {dashboardData.recentBlogs.map( (blog, index) =>{
                return <BlogTable key={blog._id} blog={blog} index={index +1} fetchBlogs={fetchBlogs} />
              } )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard