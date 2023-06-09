import express from 'express'
import { getPosts, createPost, updatePost, deletePost } from '../controllers/post.js'

const router = express.Router()

router.get('/', getPosts)

router.post('/', createPost)

router.post('/update', updatePost)

router.post('/delete', deletePost)

export default router;