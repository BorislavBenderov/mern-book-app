import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    type: String,
    ownerId: String,
    image: String,
    likes: {
        type: [String],
        default: []
    },
    comments: [
        {
            comment: {
                type: String,
            },
            created: {
                type: Date, default: Date.now()
            },
            ownerId: {
                type: String
            },
            ownerName: {
                type: String
            }
        }
    ],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;