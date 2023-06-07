import { postModel } from '../models/post.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();
        console.log('post', posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;

        const post = new postModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;

        const post = await postModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
}

export const deletePost = async(req,res)=>{
    try {
        const deletePostId = req.body;
        const post = await postModel.findOneAndDelete({_id: deletePostId});
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
}