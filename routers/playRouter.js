import express from "express"

const playRouter  = express.Router();

const handleCommunity = (req, res) => res.send("Community");
const handleGenre = (req, res) => res.send("Genre");

playRouter.get("/community", handleCommunity);
playRouter.get("/genre", handleGenre);

export default playRouter;