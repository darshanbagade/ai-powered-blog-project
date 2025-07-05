import jwt from 'jsonwebtoken'
import { Blog } from '../models/blog.model.js';
import { Comment } from '../models/comment.model.js'
//Login Controller
export const adminController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.json({success : failed, message: "Invalid Credentials"})
        }

        if(email === process.env.ADMIN_EMAIL &&  password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email}, process.env.JWT_SECRET)
            return res.json({success: true , token})
        }

    } catch (error) {
        res.json({success : false , message : "Login failed" } )
    }
}

//all blog list
export const getAllBlogAdmin = async ( req, res) => {
    try {
        
        const blogData = await Blog.find({}).sort({createdAt: -1});
        return res.json({success : true , blogData})

    } catch (error) {
        return res.json({success : false , message : error.message})        
    }

}  

//getAllComments to Admin
export const getAllComments = async (req,res) =>{
    try {
        const blogComments = await Comment.find({}).populate('blog').sort({createdAt : -1})
        //populate will replace the blogId with associated blog document

        return res.json({success : true, blogComments})
    } catch (error) {
        return res.json({success:false , message : error.message})
    }
}

export const getDashboardData  = async (req,res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt : -1}).limit(5)
        const blogCount = await Blog.countDocuments()
        const commentCount = await Comment.countDocuments({})
        const blogDraftCount = await Blog.countDocuments({ isPublished : false })

        const dashboardData = {
            recentBlogs,
            blogCount,
            commentCount,
            blogDraftCount
        }

        return res.json({succes : true, dashboardData})
    } catch (error) {
        return res.json({success:false , message : error.message})
    }
}

export const deleteCommentById = async (req, res ) =>{
    try {
        const { id } = req.body;
        
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return res.json({ success: false, message: 'Comment not found' });
        }
        return res.json({ success: true, message: 'Comment is deleted' });

    } catch (error) {
        return res.json({success:false , message : error.message})     
    }
}

export const approveCommentById = async (req, res ) =>{
    try {
        const { id } = req.body;
        
        const updatedComment = await Comment.findByIdAndUpdate(id, {isApproved: true});
        if (!updatedComment) {
            return res.json({ success: false, message: 'Comment not found' });
        }
        return res.json({ success: true, message: 'Comment approved successfully' });

    } catch (error) {
        return res.json({success:false , message : error.message})     
    }
}