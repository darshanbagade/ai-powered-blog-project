import {assets} from '../assets/assets'
import {useNavigate}  from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 '>
        <img 
        src={assets.logo} alt='logo'
        className='w-32 sm:w-44 cursor-pointer '
        onClick={()=>{navigate('/')}}
         />
        <button 
        className='flex items-center gap-2  rounded-full text-white text-sm px-10 py-2.5 bg-primary cursor-pointer'
        onClick={ () => navigate('/blog') }
        >
            Login
            <img src={assets.arrow} className='w-3' />
        </button>

    </div>
  )
}

export default Navbar