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

    async findPostById(body) {
        return Post.where(
            { name: body.name },
            { posts: body.posts,}
        )
    }


}




let postController = new Msj();
module.exports = postController;