import React, { useState } from 'react'
import { assets, blogCategories, blog_data } from '../assets/assets'
import { motion } from "motion/react"
import {} from '../assets/assets'
import {BlogCard} from './index'
import { useAppContext } from '../context/AppContext'
import { useEffect } from 'react'

function BlogList() {
    
  const [menu, setMenu] = useState("All")
  const {blogs, input, fetchBlogs} = useAppContext()
  // console.log(blogs)
  const filteredBlogs = ()=>{
    if(input == ""){
      return blogs
    }
    
     return blogs.filter( blog => 
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (

    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {
              blogCategories.map((item)=>(
                <div key={item} className='relative'>
                  <button
                  onClick={()=>setMenu(item)}
                  className={`cursor-pointer text-gray-500  ${item === menu && 'text-white pt-0.5 px-4 rounded-full'}`}
                  >{item}</button>
                  {
                    item === menu && 
                    <motion.div
                    layoutId='underline'
                    transition={{type:'spring', stiffness:500, damping:30}}
                    className='absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full'
                    >
                    
                    </motion.div>
                  }

                </div>
              ))
            }
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:gerid-cols-3 xl:grid-cols-4  gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40 rounded-2xl '>
          {
            filteredBlogs()
            .filter((blog) => (menu ==='All' ? true : menu === blog.category) )
            .map( (blog) => <BlogCard key={blog._id} blog = {blog} /> )
          }
        </div>

    </div>
  )
}

export default BlogList