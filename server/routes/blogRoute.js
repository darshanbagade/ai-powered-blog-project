import {Router} from 'express';
import { addBlog, addCommment,  getBlogById, getBlogComments, getBlogList } from '../controllers/blogController.js';
import { auth } from '../middleware/auth.middleware.js';
import upload from '../middleware/multter.middleware.js'

const blogRouter  = Router();

blogRouter.post('/add',upload.single('image') , auth, addBlog);
blogRouter.get('/all',getBlogList)
blogRouter.get('/:blogId',getBlogById)



blogRouter.post('/add-comment',addCommment)
blogRouter.get('/comments/:id',getBlogComments)

export default blogRouter