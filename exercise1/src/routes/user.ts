import express from "express";
import { createUser, getUser, getUserById } from "../controlller/user";
const router = express();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", (req, res) => {
  res.json({ message: "users put" });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "users delete" });
});

export default router;
