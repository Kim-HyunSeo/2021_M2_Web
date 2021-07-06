import express from "express";
// const express = require("express");
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter)
app.use("/play", playRouter);
app.use("/user", userRouter);

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);c