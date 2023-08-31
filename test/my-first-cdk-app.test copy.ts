import { handler } from "../src";

describe("My first CDK App tests", () => {
  it("returns name and tests", async () => {
    const output = await handler({ name: "Carlos" });
    expect(output).toStrictEqual("Good job Carlos");
  });

  it("returns no name but with good job", async () => {
    const output = await handler({ name: "" });
    expect(output).toStrictEqual("Good job");
  });
});
