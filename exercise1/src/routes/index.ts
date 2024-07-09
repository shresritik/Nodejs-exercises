import express from "express";
import userRouter from "./user";
import projectRouter from "./projects";
import authRouter from "./auth";
const router = express();
router.use("/users", userRouter);
router.use("/projects", projectRouter);
router.use("/auth", authRouter);
export default router;
