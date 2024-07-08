import express from "express";
import userRouter from "./user";
import projectRouter from "./projects";
const router = express();
router.use("/users", userRouter);
router.use("/projects", projectRouter);
export default router;
