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

router.put("/", async(req, res) => {
    try {
        const data = req.body;
        res.json(await postController.modifyPost(data))
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

router.get("/byid", async(req, res) => {
    try {
        const body = req.body;
        res.json(await postController.findPostById(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});





module.exports = router;
