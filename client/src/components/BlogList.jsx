import React, { useState } from 'react'
import {blogCategories} from '../assets/assets'
import { motion } from "motion/react"

function BlogList() {
    
  const [menu, setMenu] = useState("All")
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
    </div>
  )
}

export default BlogList