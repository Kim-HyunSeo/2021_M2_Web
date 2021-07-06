import express from "express"

const userRouter  = express.Router();

const handleinfo = (req, res) => res.send("Info");
const handleSign = (req, res) => res.send("Genre");

userRouter.get("/", handleinfo);
userRouter.get("/sign", handleSign);

export default userRouter;