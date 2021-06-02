const router = require("express").Router();
const userRouter = require("./routes/userRouter");
const chatRouter = require("./routes/chatRouter");
const postRouter = require("./routes/postRouter");

router.use("/user", userRouter);
router.use("/chat", chatRouter);
router.use("/post", postRouter);

module.exports = router;