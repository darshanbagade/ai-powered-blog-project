import jwt from 'jsonwebtoken'
import { Blog } from '../models/blog.model.js';
import { Comment } from '../models/comment.model.js'
import main from '../configs/geminiApi.js';
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
        
        const blogs = await Blog.find({}).sort({createdAt: -1});
        return res.json({success : true , blogs})

    } catch (error) {
        return res.json({success : false , message : error.message})        
    }

}  

//getAllComments to Admin
export const getAllComments = async (req,res) =>{
    try {
        const comments = await Comment.find({}).populate('blog').sort({createdAt : -1})
        //populate will replace the blogId with associated blog document

        return res.json({success : true, comments})
    } catch (error) {
        return res.json({success:false , message : error.message})
    }
}

export const getDashboardData  = async (req,res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt : -1}).limit(5)
        const blogs = await Blog.countDocuments()
        const comments = await Comment.countDocuments({})
        const drafts = await Blog.countDocuments({ isPublished : false })

        const dashboard = {
            recentBlogs,
            blogs,
            comments,
            drafts
        }

        return res.json({success : true, dashboard})
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



export const deleteBlogById = async (req, res)=>{
    try {

        // console.log(req.body);
        
        const {id} = req.body || {};
        
        if(!id){
            return res.json({success : false , message : "Blog ID is required" })
        }
        
        const deleteBlog = await Blog.findByIdAndDelete(id)
        if(!deleteBlog){
            return res.json({success : false , message : "Blog not found" })
        }

        //delete the comments associated with the blog
        await Comment.deleteMany({blog : id})


        res.json({success : true , message : "Blog has been deleted"})
        
    } catch (error) {
        return res.json({success : false, message : error.message})
    }
}

export const togglePublish = async (req,res) =>{
    try {
        const  {id} = req.body ;
        if(!id){
            return res.json({success: false , message : "Blog id is required"})
        }

        const blog = await Blog.findById(id);
        // console.log(blog);
        
        blog.isPublished = !blog.isPublished
        await blog.save()
        return res.json({success : true , message : "Blog Status Updated"})

    } catch (error) {
        return res.json({success:false , message: error.message})
    }
}

export const generateContent = async(req, res) =>{
    try {
        
        if (!req.body || !req.body.prompt) {
            return res.json({ success: false, message: "Prompt is required" });
        }
        const { prompt } = req.body;  

        const backendPrompt = `You are an expert blog writer.

Generate a well-structured, engaging, SEO-optimized blog post based on the following title:
"${prompt}"

Instructions:
- Write in a conversational and informative tone.
- Use markdown formatting (## headings, bullet points, bold, italics) for clear structure.
- Start with a short and catchy introduction.
- Divide the blog into 3–5 clear sections with appropriate headings.
- Use examples, statistics, or analogies where relevant.
- End with a strong conclusion or call to action.
- Ensure originality, clarity, and coherence.
- Do not include the title again in the output.

Begin the blog now:
`;

        const content  = await main(backendPrompt);
        if(!content){
            return res.json({success : false, message:"No gemini response"})
        }
        return res.json({success : true, content})
    } catch (error) {
            return res.json({ success : false, message: error.message })
       
    }
}