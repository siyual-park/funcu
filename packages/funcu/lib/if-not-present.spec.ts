import ifNotPresent from "./if-not-present";

class Counter {
  count = 0;
}

it("ifNotPresent", () => {
  const counter = ifNotPresent(null, () => {
    return new Counter();
  });

  expect(counter.count).toBe(0);
});
