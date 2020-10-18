import ifPresent from "./if-present";

class Counter {
  count = 0;
}

it("ifPresent", () => {
  const count = ifPresent(new Counter(), (receiver) => {
    return receiver.count + 1;
  });

  expect(count).toBe(1);
});
