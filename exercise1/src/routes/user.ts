import express from "express";
import {
  createUser,
  deleteUserById,
  getUser,
  getUserById,
  updateUser,
} from "../controlller/user";
import { authenticate, authorize } from "../middlewares/auth";
import { validateReqBody, validateReqQuery } from "../middlewares/validator";
import { getUserQuerySchema, createUserBodySchema } from "../schema/user";
const router = express();

router.get("/", validateReqQuery(getUserQuerySchema), getUser);
router.get("/:id", getUserById);
router.post(
  "/",

  validateReqBody(createUserBodySchema),
  createUser
);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

export default router;
