import { add, createUser, getUserById } from "../../../service/user";
import expect from "expect";
import sinon from "sinon";
import * as UserModel from "../../../model/user";
import { BadRequest } from "../../../error/BadRequest";
import { User } from "../../../interface/user";
import bcrypt from "bcrypt";
describe("User Service Test Suite", () => {
  describe("add", () => {
    it("should return the sum of two numbers", () => {
      const output = add(1, 2);
      expect(output).toBe(3);
    });
  });
  describe("getUserById", () => {
    let userModelGetUserByIdStub: sinon.SinonStub;
    beforeEach(() => {
      userModelGetUserByIdStub = sinon.stub(UserModel, "getUserById");
    });
    afterEach(() => {
      userModelGetUserByIdStub.restore();
    });
    it("should throw error when user is not found", () => {
      userModelGetUserByIdStub.returns(undefined);

      expect(() => getUserById("100")).toThrow(
        new BadRequest("User with id: 100not found")
      );
    });
    it("Should return user if user is found", () => {
      const user: User = {
        id: "1",
        name: "Test",
        email: "test@gmail.com",
        password: "test1234",
        permissions: [],
      };
      userModelGetUserByIdStub.returns(user);
      const response = getUserById("1");
      expect(response).toStrictEqual(user);
    });
  });
});
describe("createUser", () => {
  let bcryptHashStub: sinon.SinonStub;
  let userModelCreateUserStud: sinon.SinonStub;
  beforeEach(() => {
    bcryptHashStub = sinon.stub(bcrypt, "hash");
    userModelCreateUserStud = sinon.stub(UserModel, "createUser");
  });
  afterEach(() => {
    bcryptHashStub.restore();
    userModelCreateUserStud.restore();
  });
  it("Should create new user", async () => {
    bcryptHashStub.resolves("HashedPassword");
    const user: User = {
      id: "1",
      name: "Test",
      email: "test@gmail.com",
      password: "test1234",
      permissions: [],
    };
    await createUser(user);
    expect(bcryptHashStub.callCount).toBe(1);
    expect(bcryptHashStub.getCall(0).args).toStrictEqual([user.password, 10]);
    expect(userModelCreateUserStud.callCount).toBe(1);
    expect(userModelCreateUserStud.getCall(0).args).toStrictEqual([
      { ...user, password: "HashedPassword" },
    ]);
  });
});
