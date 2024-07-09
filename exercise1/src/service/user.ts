import { GetUserQuery, User } from "../interface/user";
import * as UserModel from "../model/user";
import bcrypt from "bcrypt";
export function getUserById(id: string) {
  const data = UserModel.getUserById(id);
  if (!data)
    return {
      error: `User with id ${id} not found`,
    };
  return data;
}
export function getUserByEmail(email: string) {
  const data = UserModel.getUserByEmail(email);

  return data;
}
export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  return UserModel.createUser({ ...user, password });
}
export function getUsers(user: GetUserQuery) {
  return UserModel.getUsers(user);
}
export function getAllUsers() {
  return UserModel.getAllUsers();
}
