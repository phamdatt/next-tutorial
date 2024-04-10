import { homeScheme } from "./validation";
describe("Validation login scheme", () => {
  it("Test with account and password is correct", () => {
    let params = {
      account: "phammtiendatt@gmail.com",
      password: "123123",
    };
    homeScheme.isValid(params).then((resp) => {
      expect(resp).toBe(true);
    });
  });
  it("Test with account is correct and password is undefined", () => {
    let params = {
      account: "phammtiendatt@gmail.com",
      password: "",
    };
    homeScheme.isValid(params).then((resp) => {
      expect(resp).toBe(false);
    });
  });
  it("Test with account is invalid email and password is correct", () => {
    let params = {
      account: "phammtiendattgmail.com",
      password: "",
    };
    homeScheme.isValid(params).then((resp) => {
      expect(resp).toBe(false);
    });
  });
});
