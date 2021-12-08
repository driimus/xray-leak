const { handler: proxy } = require("./");

it("should be running tests", async () => {
  expect(1).toEqual(1);
  const res = await proxy({ path: "/" });
  expect(res).not.toBe(null);
});
