import express from "express";
import { createUser, getUser, getUserById } from "../controlller/user";
import { authenticate, authorize } from "../middlewares/auth";
import { validateReqBody, validateReqQuery } from "../middlewares/validator";
import { getUserQuerySchema, createUserBodySchema } from "../schema/user";
const router = express();

router.get("/", validateReqQuery(getUserQuerySchema), getUser);
router.get("/:id", getUserById);
router.post(
  "/",
  authenticate,
  authorize("user.post"),
  validateReqBody(createUserBodySchema),
  createUser
);
router.put("/:id", (req, res) => {
  res.json({ message: "users put" });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "users delete" });
});

export default router;
