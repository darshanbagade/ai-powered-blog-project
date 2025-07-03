import {Router} from 'express';
import { addBlog } from '../controllers/blogController.js';
import { auth } from '../middleware/auth.middleware.js';
import upload from '../middleware/multter.middleware.js'

const blogRouter  = Router();

blogRouter.post('/add',upload.single('image') , auth, addBlog);

export default blogRouter