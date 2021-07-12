import express from "express";
import { genre, community, detail } from "../controllers/playControllers";

const playRouter  = express.Router();

playRouter.get("/genre", genre);
playRouter.get("/community", community);
playRouter.get("/detail", detail);

export default playRouter;