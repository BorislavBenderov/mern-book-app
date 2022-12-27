import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    descripton: String,
    ownerId: String,
    image: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;