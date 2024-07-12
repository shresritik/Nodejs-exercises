import { GetUserQuery, User } from "../interface/user";

export const user: User[] = [
  {
    id: "1",
    name: "user1",
    email: "asd@dsa.ocm",
    password: "slkdfjklsdf",
    permissions: ["users.get"],
  },
  {
    id: "2",
    name: "user2",
    email: "fds@dsa.com",
    password: "dsafjhdsj",
    permissions: [],
  },
  {
    id: "3",
    name: "ram",
    email: "ram@asd.com",
    password: "$2b$10$9UnDzp7pc0E8zA6SVwjg.eOZV0xgV0m/IBpYqUgmfPDJlJb/8gO.u",
    permissions: ["users.get"],
  },
];
export function getUserById(id: string) {
  return user.find(({ id: userId }) => userId === id);
}
export function createUser(username: User) {
  return user.push({ ...username, id: `${user.length + 1}` });
}
export function getUsers(query: GetUserQuery) {
  if (query.q) {
    return user.filter(({ name }) => name.includes(query.q as string));
  }
  return user;
}
export function getAllUsers() {
  console.log(user);
  return user;
}
export function getUserByEmail(userEmail: string) {
  return user.find(({ email }) => email === userEmail);
}
