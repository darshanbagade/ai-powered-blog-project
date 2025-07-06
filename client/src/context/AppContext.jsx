import { createContext, useEffect,useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({children})=>{
    

    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState("") //for search option

    
    const fetchBlogs =  async() =>{
        try {
            const response = await axios.get('/api/blog/all');
            const data = response?.data;
            if (data && data.blogData) {
                setBlogs(data.blogData);
                // console.log(data.blogData);
            } else {
                toast.error(data?.message || "Failed to fetch blogs");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    
    useEffect(()=>{
        fetchBlogs();
        const token = localStorage.getItem('token')
        if(token){
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `${token}`
        }        
    },[])
    
    
    const value={axios, navigate,token, setToken,blogs,fetchBlogs,setBlogs,input,setInput}

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = ()=>{
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppProvider');
    }
    return context;
} 