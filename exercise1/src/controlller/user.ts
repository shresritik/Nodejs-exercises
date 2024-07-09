import { Request, Response } from "express";
import * as UserService from "../service/user";
import { GetUserQuery } from "../interface/user";
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
  const { query } = req;

  // const { id } = req.params;
  //   const { query } = req.params;
  //   console.log(query, body);
  const data = UserService.getUsers(query);
  // const data = UserService.getUserById(id);
  res.json(data);
}

export async function createUser(req: Request, res: Response) {
  console.log("first");
  const { body } = req;
  const data = await UserService.createUser(body);
  console.log(data);
  res.json("user created " + data);
}
