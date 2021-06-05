const router = require("express").Router();
const postController = require("../controllers/postController");


router.post("/", async(req, res) => {
    try {
        const data = req.body;
        res.json(await postController.createPost(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/deletepost", async(req, res) => {
    try {
        const id = req.body;
        res.json(await postController.deletePost(id))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async(req, res) => {
    try {
        res.json(await postController.findAllPost());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/email", async(req, res) => {
    try {
        const body = req.body;
        res.json(await postController.findPostByEmail(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});





module.exports = router;
