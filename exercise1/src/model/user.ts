import { User } from "../interface/user";

const user = [
  {
    id: "1",
    name: "user 1",
  },
  {
    id: "2",
    name: "user 2",
  },
];
export function getUserById(id: string) {
  return user.find(({ id: userId }) => userId === id);
}
export function createUser(username: User) {
  return user.push({ id: `${user.length + 1}`, ...username });
}
