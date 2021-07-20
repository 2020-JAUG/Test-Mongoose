const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name: String,
    imgUrl: String
}, {
    timestamps: true
})

PoructSchema.methods.setImgUrl = function setImgUrl() {

    this.imgUrl = "mongodb+srv://Mongodb:333mongo666@cluster0.u4ca5.mongodb.net/chatFSD?retryWrites=true&w=majority"
}

module.exports = mongoose.model('Products', ProductSchema );