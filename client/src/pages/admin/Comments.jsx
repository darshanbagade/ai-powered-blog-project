import React,{useState,useEffect} from 'react'
import { comments_data } from '../../assets/assets'
import CommentsTableItem from '../../components/admin/CommentsTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

function Comments() {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState(false)
  const {axios} = useAppContext();

  const fetchComments = async()=>{
    try {
      const {data} = await axios.get('/api/admin/comments') ;
      setComments(data.comments)
      // console.log(comments)
      if(data.success){
      }else{

      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }
  // useEffect(()=>{
  //   fetchComments()
  // },[])
  

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1 className=''>Comments</h1>
        <div className='flex gap-4'>
          <button 
            onClick={()=> setFilter(true)}
            className = {`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs  ${ filter === true ? "text-primary":"text-gray-700" } `}
          >Approved</button>
          <button 
            onClick={()=> setFilter(false)}
            className = {`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${ filter === false ? "text-primary":"text-gray-700" } `}
          > Not Approved</button>
        </div>
      </div>

    <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
      <table className='w-full text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 text-left uppercase'>
          <tr>
            <th className='px-6 py-3'>BLOG TITLE & COMMENT</th>
            <th className='px-6 py-3 max-sm:hidden'>DATE</th>
            <th className='px-6 py-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.filter((comment) => {
              if (filter === true) {
                return comment.isApproved === true;
              }
              return comment.isApproved === false;
            })
            .map((comment , index)=>(
              <CommentsTableItem key={comment._id} comment={comment} fetchComments={fetchComments}  index={index+1} />
            ))
          }
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default Comments