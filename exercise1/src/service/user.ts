import { BadRequest } from "../error/BadRequest";
import { GetUserQuery, User } from "../interface/user";
import * as UserModel from "../model/user";
import bcrypt from "bcrypt";
export function add(a: number, b: number) {
  return a + b;
}
export function getUserById(id: string) {
  const data = UserModel.getUserById(id);
  if (!data) throw new BadRequest("User with id: " + id + "not found");
  // return {
  //   error: `User with id ${id} not found`,
  // };
  return data;
}
export function getUserByEmail(email: string) {
  const data = UserModel.getUserByEmail(email);

  return data;
}
export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  const data = await UserModel.UserModel.create({ ...user, password });
  console.log(data);
  return data;
}
export async function updateUser(id: string, user: User) {
  const password = await bcrypt.hash(user.password, 10);
  const data = await UserModel.UserModel.update(id, { ...user, password });
  console.log(data);
}
export async function deleteUser(id: string) {
  await UserModel.UserModel.delete(id);
  return { message: "user deleted" };
}
export async function getUsers(query: GetUserQuery) {
  const data = await UserModel.UserModel.getUsers(query);
  const count = await UserModel.UserModel.count(query);
  const meta = {
    page: query.page,
    size: data.length,
    total: +count.count,
  };
  return { data, meta };
}

export async function getAllUsers() {
  return await UserModel.getAllUsers();
}
