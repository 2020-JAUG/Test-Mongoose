const router = require("express").Router();
const chatController = require("../controllers/chatController.js");



router.get("/", async(req, res) => {
    try {
        res.json(await chatController.findAllRooms());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", async(req, res) => {
    try {
        const room = req.body;
        res.json(await chatController.createRoom(room));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/join", async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.joinRoom(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/leave", async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.leaveRoom(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/addmessage", async(req, res) => {
    try {
        const data = req.body;
        res.json(await chatController.addMessage(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/msj", async(req, res) => {
    try {
        const body = req.body;
        res.json(await chatController.showChatById(body))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/deletechat", async(req, res) => {
    try {
        const id = req.body;
        res.json(await chatController.deleteRoom(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;