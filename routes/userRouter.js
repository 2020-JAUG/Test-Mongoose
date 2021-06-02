const router = require("express").Router();
const userController = require("../controllers/userController.js");
const jwt = require("jsonwebtoken");



router.get("/", async(req, res) => {
    try {
        res.json(await userController.findAllUser());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", async(req, res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.put("/", async(req, res) => {
    try {
        const data = req.body;
        res.json(await userController.modifyProfile(data))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        const jwt = await userController.logMe(email, password);
        const token = jwt.token;
        const user = jwt.user;
        res.json( { token, user } );
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
});

router.delete("/", async(req, res) => {
    try {
        const body = req.body;
        res.json(await userController.removeUser(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
})

module.exports = router;