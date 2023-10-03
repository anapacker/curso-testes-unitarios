import app from "../../src/app";
import sum  from "../../src/calculator"

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });
})

it("should subtract two numbers", () => {
  const result = sum(2, 2)
  expect(result).toBe(4)
})
