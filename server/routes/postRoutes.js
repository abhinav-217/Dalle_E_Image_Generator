import express from 'express';
import * as dotenv from 'dotenv';
import Post from '../mongodb/models/post.js'
import { v2 as cloudinary } from 'cloudinary';

dotenv.config()

const router = express.Router()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
})

// GET ALL POST
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({success:true,data: posts});
    } catch (error) {
        res.status(500).json({success:false,message: error}); 
    }
})
// CREATE A IMAGE
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        })
        res.status(200).json({ success: true, data: newPost })
    } catch (error) {
        console.log("Server Error 36",error);
        res.status(500).json({success: false, message: error})
    }
})

export default router;