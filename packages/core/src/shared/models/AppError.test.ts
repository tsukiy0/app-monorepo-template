import { AppError } from "./AppError";

describe("AppError", () => {
  class TestError extends AppError {}

  it("extended errors use own name", () => {
    const actual = new TestError();

    expect(actual.name).toEqual("TestError");
  });
});
