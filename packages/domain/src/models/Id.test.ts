import { Id, IdExt } from "./Id";

describe("Id", () => {
  describe("good", () => {
    it("rand", () => {
      const actual = Id.validate(IdExt.rand());

      expect(actual.success).toEqual(true);
    });
  });

  describe("bad", () => {
    it("greater than 8 characters", () => {
      const actual = Id.validate("111111111");

      expect(actual.success).toEqual(false);
    });
  });
});
