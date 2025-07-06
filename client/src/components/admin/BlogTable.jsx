import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
function BlogTable({blog,fetchBlogs, index}) {
  
    const { title ,createdAt } = blog;
    // console.log(blog);
    
    //Date() Class is used to apply the formatting on the Dates as Date comes in string format from the APIs
    const BlogDate = new Date(createdAt) 
    // console.log(BlogDate)
    const {axios} = useAppContext();
    const handlePublish = async()=>{
        try{
            const response = await axios.post('api/admin/toggle-publish',{id:blog._id})
            if(response.success){
                // toast.success(response.message)
                // console.log(response.message);
                await fetchBlogs();
            }else{
                // toast.success(response.message)/
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const handleDelete = async ()=>{
        try{
            const{ data } = await axios.post('/api/admin/delete',{id:blog._id})
            if(data.success){
                toast.success(data.message);
            }else{
                toast.error(data.message)
            }
            await fetchBlogs()
        }catch(error){
            toast.error(error.message)
        }
    }

    return (
    <tr className='border-y border-gray-300 '>
        <th className='px-2 py-4 '>{index}</th>
        <td className='px-2 py-4'>{title}</td>
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden'>
            <p
            className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}
            >{blog.isPublished ? 'Published' : 'Unpublished'}</p>
        </td>
        <td className='px-2 py-4 flex text-xs gap-3'>
            <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'
                onClick={handlePublish}
            >{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
            <img 
                src={assets.cross_icon} 
                className="w-8 hover:scale-110 transition-all cursor-pointer" 
                onClick={handleDelete}
            />
        </td>
    </tr>
  )
}

export default BlogTable