import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
        tilte: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true,
            default: 'Liem Dang'
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);
export const postModel = mongoose.model('Post', postSchema)