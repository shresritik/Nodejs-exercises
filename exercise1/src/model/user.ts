import { GetUserQuery, User } from "../interface/user";

const user = [
  {
    id: "1",
    name: "user1",
    email: "asd@dsa.ocm",
    password: "slkdfjklsdf",
  },
  {
    id: "2",
    name: "user2",
    email: "fds@dsa.com",
    password: "dsafjhdsj",
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
