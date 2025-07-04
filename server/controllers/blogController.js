import {Blog} from '../models/blog.model.js';
import fs from 'fs';
import getImageKit from '../configs/imagekit.js';

export const addBlog = async (req, res) => {
    try {
        
        const {title,subTitle , description, category, isPublished} = JSON.parse(req.body.blog)
        const imageFile = req.file;

        
        if(!title || !description || !category || !imageFile ){
            return res.json({success : false , message: " Missing required fields"})
        }

        
        //convert image to base64
        const bufferFile  = fs.readFileSync(imageFile.path)


        // Get ImageKit instance when needed (after env is loaded)
        const imagekit = getImageKit();

        //upload image to imagekit.io
        const response = await imagekit.upload({
            file : bufferFile,
            fileName : imageFile.originalname,
            folder : "/blogs"
        })
        console.log(response)

        //optimization of image through imagekit transformation
        const optimizatedImageUrl = imagekit.url({
            path: response.filePath,
            transformation :[
                {quality : 'auto'}, //auto compression
                {format : 'webp'},  //convert to modern format            ]
                { width: '1280'}    // width resixing
            ]
        })

        const image = optimizatedImageUrl;

        const blogData = {
            title,
            subTitle,
            description, 
            category, 
            image, 
            isPublished : isPublished === "true" || isPublished === true
        }
        await Blog.create(blogData)

        res.json({success : true , message: " blog added successfully"})

    } catch (error) {
        return res.json({success : false , message : error.message})
    }
}


export const getBlogList = async (req, res) =>{
    try {
        const blogData = await Blog.find({isPublished :true})
        console.log(blogData)
        if(blogData){
            return res.json({success: true , blogData})
        }
    } catch (error) {
        console.log("Error");
        return res.json({ success : false , message : error.message })
    }
}