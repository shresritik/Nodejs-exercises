import express from "express";
import { login } from "../controlller/auth";
const router = express();
router.post("/login", login);
export default router;
