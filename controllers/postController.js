const Post = require("../models/post");
const findById = require("../models/user");

class Msj {
    constructor() {

    }

    async createPost(data) {
        return Post.create(data);
    }

    async findAllPost() {
        return Post.find();
    }
    // return Post.findOne( { posts: body.id  }, );

    async findPostByEmail(body) {
        return Post.where(
            { email: body.email },
            // { posts: body.posts, }
        )
    }

    async deletePost(req) {
        return Post.findByIdAndRemove( { _id: req._id } );
    }

// return Post.findByIdAndRemove(
//     { _id: id }//aquipasas la id de la sala
//    ,{ $pull: { post: body.post } }
// )


}




let postController = new Msj();
module.exports = postController;