import React,{useState, useRef, useEffect} from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'


function AddBlog() {

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished , setIsPublished] =useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)


  const submitHandler = () =>{
    e.preventDefault
  }

  const generateContent = async()=>{

  }

  useEffect(() => {
    //Initiate Quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current =new Quill(editorRef.current, {theme:'snow'})
    }
  },[])


  return (
    <form onSubmit={submitHandler}  className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>

        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img 
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            className='my-2 h-24 rounded cursor-pointer' 
          />
          <input 
            id="image" 
            hidden 
            type="file"        
            required 
            onChange={(e)=>setImage(e.target.files[0])} 
            className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          />
        </label>

        <p>Blog title</p>
        <input 
          type="text" 
          placeholder='Type here'
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          value={title}
          required
          onChange={(e)=>setTitle(e.target.value)} 
        />

        <p>Sub title</p>
        <input 
          type="text" 
          placeholder='Type here'
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          value={subTitle}
          required
          onChange={(e)=>setSubTitle(e.target.value)} 
        />

        <p className="mt-4">Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          {/* quill rich text editor */}
          <div ref={editorRef}></div>
          <button 
            type='button' 
            className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'
            onClick={generateContent}
          >Generate with AI</button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select 
          name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'
          onChange={(e)=>setCategory(e.target.value)}
          required
        >
          <option value ="" > Select category</option>
          {
            blogCategories.map( (item, index) =>{
              return <option value={item} key={index}>{item}</option>
            })
          }
        </select>


          <div className='flex gap-2 mt-4'>
            <label htmlFor="isPublish" className="mt-4">Publish now</label>
            <input 
              type="checkbox"
              id='isPublish'
              className=' mt-5 scale-125 cursor-pointer'
              onChange={(e)=>{setIsPublished(e.target.checked)}}
            />
          </div>

          <button type='submit' className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>Add Blog</button>
      </div>
    </form>
  )
}

export default AddBlog