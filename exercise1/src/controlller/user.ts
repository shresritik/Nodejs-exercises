import { Request, Response } from "express";
import * as UserService from "../service/user";
export function getUser(req: Request, res: Response) {
  res.json({ message: "users get" });
}
export function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  //   const { query } = req.params;
  //   console.log(query, body);
  const data = UserService.getUserById(id);
  res.json(data);
}

export function createUser(req: Request, res: Response) {
  const { body } = req;
  UserService.createUser(body);
  console.log(body);
  res.json("user created");
}
