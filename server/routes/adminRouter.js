import { 
    getAllBlogAdmin, 
    adminController, 
    approveCommentById, 
    deleteCommentById, 
    getAllComments, 
    getDashboardData, 
    togglePublish,
    deleteBlogById,
    generateContent
} from "../controllers/adminController.js";
import { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
const adminRouter = Router();

adminRouter.post('/login',adminController);
adminRouter.get('/blogs',auth, getAllBlogAdmin)
adminRouter.get('/comments',auth, getAllComments)
adminRouter.post('/approve-comment',auth, approveCommentById)
adminRouter.post('/delete-comment',auth, deleteCommentById)
adminRouter.get('/dashboard',auth, getDashboardData)
adminRouter.post('/delete',auth , deleteBlogById)
adminRouter.post('/toggle-publish',auth , togglePublish)
adminRouter.post('/generate-content',auth , generateContent)

export default adminRouter