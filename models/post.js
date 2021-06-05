const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    email: {
        type: "String",
        required: true,
        lowercase: true,
        unique: true
    },
    post: {
        type: Array
    },
    isActive: {
        type: Boolean,
        default: true
    }
});


const Post = mongoose.model('Post', postSchema);
module.exports = Post;
