import request from "supertest";

import express from "express";
import router from "../../routes";
import { user } from "../../model/user";
describe("User Integration Test Suite", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  describe("createUser Api Test", () => {
    it("Should create a user", async () => {
      const response = await request(app)
        .post("/users")
        .send({
          id: "1",
          name: "User Integration",
          email: "user@test.com",
          password: "test1234567Aa!",
          permissions: ["users.get"],
        });
      console.log(user);
    });
  });
});
