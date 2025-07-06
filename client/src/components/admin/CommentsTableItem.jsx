import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

function CommentsTableItem({comment, fetchComments}) {
  
    const { blog, createdAt , _id, name , content, isApproved } = comment;
    const date = new Date(createdAt);

    const {axios} = useAppContext()
    const handleDelete = async ()=>{
        try {
            const {data} = await axios.post("/api/admin/delete-comment",{id:_id}) 
            if(data.success){
                toast.success(data.message);
                fetchComments();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const handleApprove = async ()=>{
        try {
            const {data} = await axios.post("/api/admin/approve-comment",{id:_id}) 
            if(data.success){
                toast.success(data.message);
                fetchComments();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

   return (
    <>
        <tr className='border-y border-gray-300 ' >
            <td className='px-6 py-4'>
                <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
                <br />
                <br />
                <b className='font-medium'>Name</b> : {name}
                <br />
                <b className='font-medium text-gray-600'>Comment</b> : {content}
            </td>

            <td className='px-6 py-4 max-sm:hidden'>{date.toLocaleDateString()}</td>

            <td className='px-6 py-4'>
                <div   className='inline-flex items-center gap-4'>
                    { 

                        !isApproved ? <img src={assets.tick_icon} className=' w-5 hover:scale-110 transition-all cursor-pointer' 
                        onClick={handleApprove}
                        /> : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>
                    }                    
                    <img 
                        src={assets.bin_icon} 
                        className="w-5 hover:scale-110 transition-all cursor-pointer" 
                        onClick={handleDelete}
                        />
                </div>
            </td>
        </tr>
        
    </>
  )
}

export default CommentsTableItem