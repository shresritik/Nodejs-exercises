import { Request, Response } from "express";
import * as UserService from "../service/user";
import { GetUserQuery } from "../interface/user";
import HttpStatusCodes from "http-status-codes";
import loggerWithNameSpace from "../utils/logger";
const logger = loggerWithNameSpace("UserController");
export function getUser(req: Request, res: Response) {
  const { query } = req;
  console.log(query);
  const data = UserService.getUsers(query);
  console.log("here", data);
  // const data = UserService.getUserById(id);
  res.json(data);
}
export function getUserById(
  req: Request<any, any, GetUserQuery>,
  res: Response
) {
  logger.info("Called getUserbyID");
  const { id } = req.params;

  const data = UserService.getUserById(id);
  res.status(HttpStatusCodes.ACCEPTED).json(data);
}

export async function createUser(req: Request, res: Response) {
  console.log("first");
  const { body } = req;
  const data = await UserService.createUser(body);
  console.log(data);
  res.json("user created " + data);
}
